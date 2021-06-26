import { proxyApi, ServerPoint } from './utils/request'
import { init } from './db/historyDB'

enum Status {
    loading,
    success,
    timeout,
    failed,
}

interface DocData {
    url: string
    docString: string
    createdAt: number
    serverPoint: ServerPoint
    status: Status
}

export default class DocProxy {
    private db: IDBDatabase
    private initPromise: Promise<void>

    constructor() {
        this.initPromise = init().then((db) => {
            this.db = db
        })
    }

    private pickServerPoint(url: string): ServerPoint {
        // return 'tokyo'
        return 'shanghai'
    }

    private async find(url: string) {
        await this.initPromise
        let transaction = this.db.transaction('doc', 'readonly')
        let objectStore = transaction.objectStore('doc')
        let cacheData = await new Promise<DocData>((resolve) => {
            objectStore.get(url).onsuccess = (e) => {
                resolve((e.target as IDBRequest).result)
            }
        })

        if (cacheData) {
            let expire = Date.now() - cacheData.createdAt
            if (expire > 1000 * 60 * 60 * 24) {
                console.log('expire ', expire, url)
                this.requestApi(url)
            }
            return cacheData
        }
        return false
    }

    private async cache(data: DocData) {
        await this.initPromise
        let transaction = this.db.transaction('doc', 'readwrite')
        let objectStore = transaction.objectStore('doc')
        return objectStore.add(data)
    }

    private async requestApi(url: string) {
        let serverPoint = this.pickServerPoint(url)
        let data: DocData = {
            url,
            docString: '',
            createdAt: Date.now(),
            serverPoint,
            status: Status.loading,
        }
        let request = proxyApi(url, serverPoint)
        await request
            .then(
                (response) => {
                    return response.text()
                },
                (error) => {
                    data.status = Status.failed
                    return false
                }
            )
            .then((result) => {
                if (result !== false) {
                    data.docString = result as string
                }
            })

        this.cache(data)
        return data
    }

    public async request(url: string) {
        let data = await this.find(url)
        if (data === false) {
            data = await this.requestApi(url)
        }
        return data
    }
}
