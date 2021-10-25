import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';

import { HelloBackendService } from '../common/protocol';
import data from './data.json';



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

	static data = JSON.parse(JSON.stringify(data));

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
			var values = extensionWidget.data[extensionWidget.state.statePatternSelection].values; //data[extensionWidget.state.statePatternSelection];
			var table = document.getElementById('show_pattern_table') as HTMLTableElement;
			Object.keys(values).forEach((key) =>{
				var row = this.insertCells(table, key);
				if(values[key].extension==1){
					var cell3 = row.insertCell(2);
					var t3 = document.createElement("button");
					t3.innerHTML = "+";
					t3.id = "btn"+ key;
					cell3.appendChild(t3);
					t3.addEventListener('click', (event) => {
						this.buttonClick(table, ( event.target as Element).id, values);
					});	
				}
				if (("classes" in values[key]) == true){
					var classes = values[key]["classes"];
					Object.keys(classes).forEach((key) =>{
						var row = this.insertCells(table, key);
						if(classes[key].extension==1){
							var cell3 = row.insertCell(2);
							var t3 = document.createElement("button");
							t3.innerHTML = "+";
							t3.id = "btn"+ key;
							cell3.appendChild(t3);
							t3.addEventListener('click', (event) => {
								this.buttonClick(table, ( event.target as Element).id, classes);
							});	
						}

					});
				}
			});
				
			var d = document.getElementById("result") as HTMLElement;
			var b = document.createElement("button");
			b.id = "btnFinalize";
			b.innerHTML = "Finally Get Code";
			b.addEventListener('click', (_event) => {
				this.buttonClick2(table);				
								
			});
			d.appendChild(b);  
		
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
	insertCells(table: HTMLTableElement, key: string){
		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var t1 = document.createElement("label");
		t1.id = "label"+ table.rows.length;
		t1.innerHTML = key;
		var t2 = document.createElement("input");
		t2.id = "txtbox"+ table.rows.length;
		t2.placeholder = key;
		cell1.appendChild(t1);
		cell2.appendChild(t2);
		return row;
	}
	//when button is clicked adds one label and one input of the specific class that the user wants to insert one more 
	buttonClick (table: HTMLTableElement, value: string, values: string): void {
		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1); 
		var t1 = document.createElement("label");
		if(extensionWidget.state.statePatternSelection=="Abstract Factory"){

		}else if(extensionWidget.state.statePatternSelection=="Abstract Factory"){

		}
		t1.innerHTML = this.updateLabel(value.substr(3,));
		t1.id = "label"+table.rows.length;
		var t2 = document.createElement("input");
		t2.id = "txtbox"+table.rows.length;
		t2.placeholder = this.updateLabel(value.substr(3,));;
		cell1.appendChild(t1);
		cell2.appendChild(t2);
	}

	buttonClick2 (table: HTMLTableElement):void{
		/*var result = [];
		var rows = table.rows;
		var cells, t;
		// Iterate over rows
		for (var i=0, iLen=rows.length; i<iLen; i++) {
			cells = rows[i].cells;
			t = [];
			// Iterate over cells
			for (var j=0, jLen=cells.length; j<jLen; j++) {
			t.push(cells[j].textContent);
			}
			result.push(t);
		}
		console.log(result);*/

		for (var i=1; i<=table.rows.length; i++){
			var v = (document.getElementById("txtbox"+i)as HTMLElement).innerHTML;
			console.log("txtbox: "+v);
		}
			
		var getUrl = window.location.href;
        this.helloBackendService.sayHelloTo(getUrl);
	}

	updateLabel(value: string){
		if (value.includes('.')){
			return value.substring(0,value.length-2) + '.' + String.fromCharCode(value.slice(-1).charCodeAt(0)+1);
		}
		return value.substring(0,value.length-2) + String.fromCharCode(value.slice(-1).charCodeAt(0)+1);
	}

	refresh(): void {
		window. location. reload();
	}

}	



