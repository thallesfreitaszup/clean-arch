import { MongoClient, Collection } from 'mongodb'
export const  MongoClientHelper =  {
  client: null as MongoClient,
  async connect(url: string) {
    return (this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }))
  },
   async close() {
     this.client.close()
   },
   getCollection(name: string): Collection {
    return  this.client.db().collection(name)
  }

}
