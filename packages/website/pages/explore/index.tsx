import React, { useState } from 'react'
import { ItemCard } from '../../components/Home'
import { exploreData } from '../../utils/explore'
import NavigationBar from '../../components/Explore/NavigationBar'
import style from './explore.module.scss'

export default function Explore(props: { hidden: boolean }) {
    const navigationList = [
        {
            title: '推荐',
            key: 'recommended',
            color: '',
        },
        {
            title: '入门级',
            key: 'gettingStarted',
            color: '',
        },
        {
            title: '英语教材',
            key: 'textbook',
            color: '',
        },
        {
            title: '名著小说',
            key: 'classicNovel',
            color: '',
        },
        {
            title: '技术文档',
            key: 'technicalDocuments',
            color: '',
        },
        {
            title: '时事新闻',
            key: 'news',
            color: '',
        },
        {
            title: '政治金融',
            key: 'politicalFinance',
            color: '',
        },
        {
            title: '文史哲',
            key: 'history',
            color: '',
        },
        {
            title: '体育运动',
            key: 'sports',
            color: '',
        },
    ]

    const navigationData = exploreData as { [index: string]: { list: any[] } }

    const [navigationIndex, setIndex] = useState(0)

    const seletedKey = navigationList[navigationIndex].key

    return (
        <div className={style['wrp-explore-page']} hidden={props.hidden}>
            <header className={style['header']}>
                <NavigationBar
                    list={navigationList}
                    selected={navigationIndex}
                    setIndex={setIndex}
                ></NavigationBar>
            </header>
            <div className={style['card-container']}>
                {navigationData[seletedKey].list.map((item, index) => (
                    <ItemCard data={item} key={item.url}></ItemCard>
                ))}
            </div>
        </div>
    )
}