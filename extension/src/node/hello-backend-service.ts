import { injectable, inject } from "inversify";
import { HelloBackendService } from "../common/protocol";
import {FileSearchService } from "@theia/file-search/lib/common/file-search-service";

@injectable()
export class HelloBackendServiceImpl implements HelloBackendService {

    @inject(FileSearchService)
    protected readonly fileSearchService!:FileSearchService;
      
    static index = -1;

    sayHelloTo(url: string, table: Array<string>): Promise<number> {
        //string manipulation to get the right form of url string
        var lastL = url.lastIndexOf("c:");
        var testFolder = url.substr(lastL+3);
        var splitted = testFolder.split("/");
        var rootUri = "C:";
        splitted.forEach(function (value) {
            rootUri = rootUri + "\\" + value;
          }); 
        //console.log(rootUri);

        //prepare file-search, define search pattern
        const roots: FileSearchService.RootOptions = {};
        //const rootUri = "C:\\Users\\test\\Downloads\\src\\src";
        roots[rootUri] = {};
        const opts: FileSearchService.Options = {
            rootOptions: roots
        };
        opts.includePatterns = ['**/*.java'];
       
        //search for every file name in textbox values
        //index=-1 if not found
        this.fileSearchService.find('',opts).then((res)=>{
		    res.forEach(function (str2){
                var lastW = str2.lastIndexOf("/");
                var file = str2.substr(lastW+1);
                file = file.substr(0, file.indexOf("."));
                for(var j = 0;j<table.length;j++) {
                    if (table[j]==file){
                        HelloBackendServiceImpl.index = table.indexOf(table[j]);
                        console.log("IN" + HelloBackendServiceImpl.index);
                        return new Promise<number>(resolve => resolve(HelloBackendServiceImpl.index));
                    }
                }
            });
		});
        
        return new Promise<number>(resolve => resolve(HelloBackendServiceImpl.index));


    
    }
}
