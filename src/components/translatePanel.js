import React from 'react';
import Word from './word.js';
import { isS } from 'xmlchars/xml/1.0/ed5';

// 放到TranslatePanel 哪里合适
var translateScope={
    front:1,    //设定值
    behind:1,   //设定值
    nf:0,       //当前值
    nb:0        //当前值
}

class TranslatePanel extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }  
    }

    extractSentence(target){
        console.log("extract sentence")
        // 由target提取所在句子。target为event.target
        let parent = target.parentNode


    }

    // app.js
    attToProps(content){
        let props = {};
        console.log("attToProps", content)
        let cssText = content.style.cssText
        props['style'] = this.styleFormat(cssText);

        console.log('style-->',cssText)
        let classList = content.classList
        if(content.href) props['href'] = content.href
        if(content.hidden != null) props['hidden'] = content.hidden

        return props
    }

    // app.js
    styleFormat(cssText){
        console.log("cssText",cssText)
        if(cssText != ""){
            cssText = cssText.replace(/:\s*/g, '":"')
            cssText = cssText.replace(/;\s*/g, '","')
            cssText = '{"' + cssText + '"}'
            cssText = cssText.replace(/,""/g, '')
            // 还需要对一些内容进行替换，比如 border-radius 替换为borderRadius

            let style = JSON.parse(cssText)
            console.log("cssText",cssText,typeof(cssText))
            console.log('style ->', style)

            return style
        }
        return {}
    }

    // app.js
    isInline(nodeName){
        const innerText = ['#text','b','i','em','s','small','u','strong','mark','span','a']
        if(!typeof(nodeName) == "string"){
            throw "parameter type error, isInline() need string parameter!"
            // return false
        }
        // console.log('toLowerCase', nodeName)
        if(innerText.includes(nodeName.toLowerCase())){
            return true;
        }else{
            return false;
        }
    }


    isTranslateEnd(symbol,direction){
        console.log('translate end', symbol,direction)
        // 裁定滑动翻译的范围，比如翻译1句，还是3句
        if(this.isSentenceEnd(symbol)){
            if(direction == "front"){
                translateScope.nf += 1
                if(translateScope.nf = translateScope.front){
                    console.log('translate end', true)
                    return true
                }
            }else if(direction == "behind"){
                translateScope.nb += 1
                if(translateScope.nb = translateScope.behind){
                    console.log('translate end', true)
                    return true
                }
            }
        }
        console.log('translate end', false)
        return false
    }

    copy(content,children){
        // Element、Children 为React Element
        let type = content.nodeName.toLowerCase();
        let props = this.attToProps(content);
        let element = React.createElement(type,props,...children);
        return element;
    }

    deepCopy(node,returnChilren=false){
        
        if(node.nodeName == '#text') return node.textContent;

        let children = node.firstChild;
        let childrenList = [];
        while(children){
            childrenList = childrenList.concat(this.deepCopy(children));
            children = children.nextSibling;
        }


        if(returnChilren){
            return childrenList;
        }else{

            let type = node.nodeName.toLowerCase();
            const ignoreTag = ['#comment'];

            if(ignoreTag.includes(type)){
                return '';
            }

            let props = this.attToProps(node);
            const noChildren = ['img','hr','br','input','link'];

            if(noChildren.includes(type)){
                let element = React.createElement(type,props);
                return element;
            }
            
            let element = React.createElement(type,props,childrenList);
            return element;
        }
        
    }

    copyWord(word){
        // copy Word, 由Word渲染后的span便签copy Word
        // word可能含有子标签，需要遍历复制
        let childrenList = this.deepCopy(word,true);
        return(
            <Word
                content={childrenList}
                handleClick={()=>{}}
                translate={()=>{}}
            />
        )
    }

    isSentenceEnd(symbol){
        const end = /[.。!！?？]/
        return !!symbol.match(end)
    }

    frontFind(target, testParent=true){
        // 向前遍历节点 查找翻译起点, 不限于同级兄弟节点
        let list = [];
        while(target){
            console.log("front, while", target);
            if(target.nodeName == "#text"){
                if(this.isTranslateEnd(target.textContent,'front')) break;
                list.unshift(target.textContent);
            }else if(target.nodeName == "SPAN"){
                if(target.classList[0] == "@w"){
                    // Word
                    list.unshift(this.copyWord(target));
                }else{
                    // 需要遍历子节点
                    let children = this.frontFind(target.lastChild,false);
                    list.unshift(this.copy(target,children));
                }
            }else if( !this.isInline(target.nodeName)){
                break;
            }else{
                // 其他标签， 遍历子节点
                let children = this.frontFind(target.lastChild,false);
                console.log("front children", children)
                list.unshift(this.copy(target,children));
            }

            // 偶尔因target.parentName undefined 出错;
            if(!target.previousSibling && this.isInline(target.parentNode.nodeName) && testParent){
                target = target.parentNode.previousSibling;
            }else{
                target = target.previousSibling;
            }
        }
        return list
    }

    behindFind(target, testParent=true){
        // 向后遍历节点  查找翻译终点  不限于同级兄弟节点
        let list = [];
        while(target){
            console.log("next, while", target);
            if(target.nodeName == "#text"){
                list.push(target.textContent);
                if(this.isTranslateEnd(target.textContent,'behind')) break;
            }else if(target.nodeName == "SPAN"){
                if(target.classList[0] == "@w"){
                    // Word
                    list.push(this.copyWord(target));
                }else{
                    // 需要遍历子节点
                    let children = this.behindFind(target.firstChild,false);
                    list.push(this.copy(target,children));
                }
            }else if( !this.isInline(target.nodeName)){
                break;
            }else{
                // 其他标签， 遍历子节点
                let children = this.behindFind(target.firstChild,false);
                list.push(this.copy(target,children));
            }

            if(!target.nextSibling && this.isInline(target.parentNode.nodeName) && testParent){
                target = target.parentNode.nextSibling;
            }else{
                target = target.nextSibling;
            }
        }
        return list
    }

    test(target){
        if(!target) return['',''];
        console.log('translate test',target);
        let front = this.frontFind(target);
        let nextTarget = target.nextSibling;
        let behind  = '';
        if(!nextTarget){
            if(this.isInline(target.parentNode.nodeName)){
                nextTarget = target.parentNode.nextSibling;
            }
        }else if(this.isInline(nextTarget.nodeName)){
            // 正常情况， nextTarget = target.nextSibling
            // 无需操作
        }else{
            // 非行内标签, 直接断句。
            nextTarget = '';
        }
        behind = this.behindFind(nextTarget);
        console.log('front, behind', front, behind);
        // if(target) console.log('next ', target.nextSibling)
        return [front, behind];
    }

    render(){

        let [front,behind] = this.test(this.props.translateTarget)
        
        let style={
            "width": "3em",
            "height": "1em",
            "backgroundColor": "#dfd",
            "borderRadius": "15px",
            "position": "fixed",
            "bottom": "0"
        }

        return (
            <div style={style}>
                {front}
                <span> | </span>
                {behind}
            </div>
        )
    }
}

export default TranslatePanel;