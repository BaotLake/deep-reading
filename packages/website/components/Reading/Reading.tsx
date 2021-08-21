import {Explanation, Point, Translation, AnchorModule} from '@wrp/ui'
import {useState, useEffect, useRef} from 'react'
import {MessageType, MessageData, LookUp, Translate} from '@wrp/core'

export default function Reading() {
    const [position, setPosition] = useState<[number, number]>([0, 0])
    const [explanationVisible, setExplanationVisible] = useState(false)
    const [explanationData, setExplanationData] = useState({
        word: 'experiment',
    })
    const [anchorVisible, setAnchorVisible] = useState(false)
    const [href, setHref] = useState('')

    const [translateVisible, setTranslateVisible] = useState(false)
    const [translateData, setTranslateData] = useState({})
    const dataRef = useRef({
        explanationXY: [0, 0],
    })
    const explanationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const lookUp = new LookUp()
        const translate = new Translate()

        lookUp.onExplain = (data) => {
            console.log('onExplain ', data)
            setExplanationData(data)
        }

        translate.onTranslate = (data) => {
            setTranslateData(data)
        }

        const centre = (position: DOMRect): [number, number] => {
            let x = position.x + position.width / 2
            let y = position.y + position.height / 2
            return [x, y]
        }

        const handleMessage = (e: MessageEvent<MessageData>) => {
            let data = e.data
            switch (data.type) {
                case MessageType.lookUp:
                    setExplanationVisible(true)
                    setPosition(centre(data.position))
                    dataRef.current.explanationXY = centre(data.position)
                    if (explanationRef.current)
                        explanationRef.current.style.transform = `translate(0px,0px)`
                    lookUp.lookUp(data.text)
                    break
                case MessageType.lookUpPosition:
                    // setPosition([data.position.x, data.position.y])
                    // setPosition(centre(data.position))
                    let xy = centre(data.position)
                    if (explanationRef.current)
                        explanationRef.current.style.transform = `translate(${
                            xy[0] - dataRef.current.explanationXY[0]
                        }px,${xy[1] - dataRef.current.explanationXY[1]}px)`
                    break
                case MessageType.open:
                    setAnchorVisible(true)
                    setHref(data.href)
                    break
                case MessageType.tapBlank:
                    console.log('explanationVisible: ', explanationVisible)
                    setExplanationVisible(false)
                    break
                case MessageType.translate:
                    setTranslateVisible(true)
                    translate.translate(data.text)
                    break
            }
        }

        window.addEventListener('message', handleMessage)

        return () => {
            window.removeEventListener('message', handleMessage)
        }
    }, [])

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            <Explanation
                ref={explanationRef}
                visible={explanationVisible}
                position={position}
                zoom={1}
                data={explanationData}
                onClose={() => setExplanationVisible(false)}
            />

            <Translation
                visible={translateVisible}
                onClose={() => setTranslateVisible(false)}
                data={translateData}
            />

            <AnchorModule
                visible={anchorVisible}
                onClose={() => setAnchorVisible(false)}
                href={href}
            />
        </div>
    )
}
