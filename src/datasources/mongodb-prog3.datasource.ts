import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodbProg3',
  connector: 'mongodb',
  url: 'mongodb+srv://proyectoProg3:MJJAtKzmT2fGOYzH@cluster0.uniou.mongodb.net/proyectoProg3_users?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbProg3DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodbProg3';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodbProg3', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
