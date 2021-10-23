import { injectable } from "inversify";
import { HelloBackendService } from "../common/protocol";

@injectable()
export class HelloBackendServiceImpl implements HelloBackendService {
    
    sayHelloTo(): void {
        var getUrl = window.location;
        var j = JSON.parse(JSON.stringify(getUrl));
        console.log(j["href"]);
        var url = (j["href"].toString());
        var lastL = url.lastIndexOf("c:");
        var testFolder = url.substr(lastL);
        console.log(testFolder);
    }
}
