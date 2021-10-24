import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import data from './data1.json';
import { HelloBackendService } from '../common/protocol';


@injectable()
export class extensionWidget extends ReactWidget {
	[x: string]: any;

    static readonly ID = 'extension:widget';
    static readonly LABEL = 'Extension Widget';
	
    static state = {
		statePatternSelection: '',
		stateURLproject: ''
	}
	
    @inject(MessageService)
    protected readonly messageService!: MessageService;
	@inject(HelloBackendService)
	protected readonly helloBackendService: HelloBackendService;
    

	@postConstruct()
	protected async init(): Promise < void> {
    this.id = extensionWidget.ID;
    this.title.label = extensionWidget.LABEL;
    this.title.caption = extensionWidget.LABEL;
    this.title.closable = true;
    this.title.iconClass = 'fa fa-info-circle';
    this.update();
	}
	
	static setState: any;
	static counter: number[];
	
		
	protected render(): React.ReactNode {
		const header = `Choose a Design Pattern and get the code. `;
		
		return <div id='widget-container'>
		<AlertMessage type='INFO' header={header} />
		<div id='issues'>
				<br />
				<select id="drop-down-patterns" onChange={this.updateSelection} name="statePatternSelection">
						<option id="empty-choice" value="Choose_pattern">Choose pattern</option>
					<optgroup label="Creational">
						<option value="Abstract Factory">Abstract Factory</option>
						<option value="Builder">Builder</option>
						<option value="Factory Method">Factory Method</option>
						<option value="Prototype">Prototype</option>
						<option value="Singleton">Singleton</option>
					</optgroup>
					<optgroup label="Structural">
						<option value="Adapter">Adapter</option>
						<option value="Bridge">Bridge</option>
						<option value="Composite">Composite</option>
						<option value="Decorator">Decorator</option>
						<option value="Facade">Facade</option>
						<option value="Flyweight">Flyweight</option>
						<option value="Proxy">Proxy</option>
					</optgroup>
					<optgroup label="Behavioral">
						<option value="Chain of Responsibility">Chain of Responsibility</option>
						<option value="Command">Command</option>
						<option value="Interpreter">Interpreter</option>
						<option value="Iterator">Iterator</option>
						<option value="Mediator">Mediator</option>
						<option value="Memento">Memento</option>
						<option value="Observer">Observer</option>
						<option value="State">State</option>
						<option value="Strategy">Strategy</option>
						<option value="Template Method">Template Method</option>
						<option value="Visitor">Visitor</option>
					</optgroup>
				</select><br /> 
				<br /> 
				<button id="btn-get-code" type="button" title='Get the code according to the pattern' onClick={_a => this.runprocess()}> Get Code </button>
				<br /> 
				<div id="show_pattern"> 
					
				</div>
				<br /> 
				<div id="result">
					<table id="show_pattern_table">

					</table>
					
				</div>
				
			</div>
			</div>
	}
	
    protected runprocess(): void {
		if (extensionWidget.state.statePatternSelection!="Choose_pattern" && extensionWidget.state.statePatternSelection!=""){
			(document.getElementById("btn-get-code") as HTMLButtonElement).style.visibility = 'hidden';
			 
			//show the JSON values for the chosen key-pattern
			var l = JSON.parse(JSON.stringify(data));
			var values = l[extensionWidget.state.statePatternSelection]["values"];
			
			var btnExtension = l[extensionWidget.state.statePatternSelection]["btnExtension"] ;
			extensionWidget.counter = [1,1,1,1,1,1,1,1,1,1];
			var table = document.getElementById('show_pattern_table') as HTMLTableElement;
			for (var i=0;i< values.length;i++){
				//console.log(extensionWidget.counter[i]);
				var row = table.insertRow(i);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var t1 = document.createElement("label");
				t1.innerHTML = values[i];
				t1.id = "label"+i;
				var t2 = document.createElement("input");
				t2.id = "txtbox"+i;
				t2.placeholder = values[i];
				cell1.appendChild(t1);
				//cell1.style.width = "200px";
				cell2.appendChild(t2);
				//cell2.style.width = "200px";
				if(btnExtension[i]==1){
					var cell3 = row.insertCell(2);
					var t3 = document.createElement("button");
					t3.innerHTML = "+";
					t3.id = "btn"+ values[i];
					cell3.appendChild(t3);
					t3.addEventListener('click', (event) => {
						this.buttonClick(table, ( event.target as Element).id, extensionWidget.counter[i] +1);
						extensionWidget.counter[i] = extensionWidget.counter[i] + 1;

					});	

				}

			}
			row = table.insertRow(table.rows.length);
			cell1 = row.insertCell(0);
			var b = document.createElement("button");
			b.id = "btnFinalize";
			b.innerHTML = "Finally Get Code";
			b.addEventListener('click', (_event) => {
								
				var getUrl = window.location.href;
            	this.helloBackendService.sayHelloTo(getUrl);
				
			});
			cell1.appendChild(b);  
		
		}else{
			this.messageService.info('You need to choose a software pattern!');
		}
	}

    //update the state
    updateSelection(e:React.ChangeEvent<HTMLSelectElement>){
		const key =e.currentTarget.name as keyof typeof extensionWidget.state;
		extensionWidget.state[key]  = e.currentTarget.value;
		
		
	}
	 //update the state
	 updateInput(e:React.ChangeEvent<HTMLInputElement>){
		const key =e.currentTarget.name as keyof typeof extensionWidget.state;
		extensionWidget.state[key]  = e.currentTarget.value;
		
	}
	//when button is clicked adds one label and one input of the specific class that the user wants to insert one more 
	buttonClick (table: HTMLTableElement, value: string, counter: number): void {
		table = document.getElementById('show_pattern_table') as HTMLTableElement;
		var size = table.rows.length;	
		var row = table.insertRow(size);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var t1 = document.createElement("label");
		t1.id = "label"+(size);
		value = this.updateLabelValue(value.substr(3,), counter);
		t1.innerHTML = value;
		var t2 = document.createElement("input");
		t2.id = "txtbox"+(size);
		t2.placeholder = value;
		cell1.appendChild(t1);
		cell2.appendChild(t2);
	}

	updateLabelValue(string : string, counter: number): string {
		let lastChar = string.slice(-1);
		string = string.replace(lastChar, counter.toString());
		return string;
	}

	refresh(): void {
		window. location. reload();
	}

}	



