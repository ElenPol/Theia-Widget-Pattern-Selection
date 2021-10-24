import { injectable, inject } from "inversify";
import { HelloBackendService } from "../common/protocol";
import {FileSearchService } from "@theia/file-search/lib/common/file-search-service";

@injectable()
export class HelloBackendServiceImpl implements HelloBackendService {

    @inject(FileSearchService)
    protected readonly fileSearchService!:FileSearchService;
        
    sayHelloTo(url: string): void {
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
       
        //start file-search, create list with file names
        let fileList: Array<string> = [];
        this.fileSearchService.find('',opts).then((res)=>{
		    res.forEach(function (str2){
                var lastW = str2.lastIndexOf("/");
                var file = str2.substr(lastW+1);
                file = file.substr(0, file.indexOf("."));
                fileList.push(file);
                console.log(file);
            });
		});
        
        
        //


    
    }
}
