import AbstractService from "./abstract-service"

export default class AgentService extends AbstractService {


  getSources() {
    return this.xhrManager.xhr( this.serviceUrl("sources"), "GET");
  }
  addSource( name, memo, type="agent", body="" ) {
    this.googleAnalytics.sendEvent( "add agent source" );
    return this.xhrManager.xhr( this.serviceUrl("sources"), "POST", {
      name: name,
      memo: memo,
      type: type,
      body: body
    });
  }

  getSource( id ) {
    return this.xhrManager.xhr( this.serviceUrl("sources/" + id), "GET");
  }
  updateSource( id, name, memo, body="" ) {
    this.googleAnalytics.sendEvent( "update agent source" );
    return this.xhrManager.xhr( this.serviceUrl("sources/" + id), "PUT", {
      name: name,
      memo: memo,
      body: body
    });
  }
  deleteSource( id ) {
    this.googleAnalytics.sendEvent( "delete agent source" );
    return this.xhrManager.xhr( this.serviceUrl("sources/" + id), "DELETE");
  }

  getClasses() {
    return this.xhrManager.xhr( this.serviceUrl("classes"), "GET");
  }

  endpoint() {
    return "agents";
  }
}
