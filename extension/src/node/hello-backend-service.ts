import { injectable, inject } from "inversify";
import { HelloBackendService } from "../common/protocol";
import {FileSearchService } from "@theia/file-search/lib/common/file-search-service";

@injectable()
export class HelloBackendServiceImpl implements HelloBackendService {

    @inject(FileSearchService)
    protected readonly fileSearchService!:FileSearchService;
    
    sayHelloTo(name: string): Promise<string> {
        if (typeof window !== "undefined") {
            var getUrl = window.location.pathname;
            console.log(getUrl);
        }
        
        /*var j = JSON.parse(JSON.stringify(getUrl));
        console.log(j["href"]);
        var url = (j["href"].toString());
        var lastL = url.lastIndexOf("c:");
        var testFolder = url.substr(lastL);*/
        

        const roots: FileSearchService.RootOptions = {};
        const rootUri = "C:\\Users\\test\\Downloads\\src\\src";
        roots[rootUri] = {};
        const opts: FileSearchService.Options = {
            rootOptions: roots
        };
        opts.includePatterns = ['**/*.java'];

        this.fileSearchService.find('',opts).then((res)=>{
		    console.log("File: " + res);
		});
        
        return new Promise<string>(resolve => resolve('Hello ' + name));
    }
}
