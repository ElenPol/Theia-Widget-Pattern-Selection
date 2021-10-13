import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
//import { workspace} from '@theia/plugin';
import { integer } from 'vscode-languageserver-types';



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
	
	static arrayOfJSON = [
		{//???
		   "name":"Abstract Factory",
		   "values":[
			  "AbstractFactory",
			  "ConcreteFactory",
			  "AbstractProduct1",
			  "Product1",
			  "Client"
		   ],
		   "btnExtension":[0,0,1,1,0],
		   "counter": 1,
		},
		{
		   "name":"Builder",
		   "values":[
			  "Director",
			  "Builder",
			  "ConcreteBuilder1",
			  "Product1"
		   ],
		   "btnExtension":[0,0,1,1],
		   "counter": 1,
		},
		{
		   "name":"Factroy Method",
		   "values":[
			  "Product",
			  "ConcreteProduct",
			  "Creator",
			  "ConcreteCreator"
		   ],
		   "btnExtension":[0,0,0,0],
		   "counter": 1,
		},
		{
		   "name":"Prototype",
		   "values":[
			  "Client",
			  "Prototype",
			  "ConcretePrototype1"
		   ],
		   "btnExtension":[0,0,1],
		   "counter": 1,
		},
		{
		   "name":"Singleton",
		   "values":[
			  "Singleton"
		   ],
		   "btnExtension":[0],
		   "counter": 1,
		},
		{
		   "name":"Adapter",
		   "values":[
			  "Client",
			  "Target",
			  "Adapter1",
			  "Adaptee1"
		   ],
		   "btnExtension":[0,0,1,1],
		   "counter": 1,
		},
		{
		   "name":"Bridge",
		   "values":[
			  "Client",
			  "Abstraction",
			  "RefinedAbstraction1",
			  "Implementor",
			  "ConcreteImplementor1"
		   ],
		   "btnExtension":[0,0,1,0,1],
		   "counter": 1,
		},
		{
		   "name":"Composite",
		   "values":[
			  "Client",
			  "Component",
			  "Leaf1",
			  "Composite1"
		   ],
		   "btnExtension":[0,0,1,1],
		   "counter": 1,
		},
		{
		   "name":"Decorator",
		   "values":[
			  "Component",
			  "ConcreteComponent1",
			  "Decorator",
			  "ConcreteDecorator1"
		   ],
		   "btnExtension":[0,1,0,1],
		   "counter": 1,
		},
		{//??
		   "name":"Facade",
		   "values":[
			  ""
		   ],
		   "btnExtension":[0],
		   "counter": 1,
		},
		{
		   "name":"Flyweight",
		   "values":[
			  "Client",
			  "FlyweightFactory",
			  "Flyweight",
			  "ConcreteFlyweight",
			  "UnsharedConcreteFlyweight",
			  "Client"
		   ],
		   "btnExtension":[0,0,0,0],
		   "counter": 1,
		},
		{
		   "name":"Proxy",
		   "values":[
			  "Client",
			  "Subject",
			  "Proxy",
			  "RealSubject"
		   ],
		   "btnExtension":[0,0,0,0],
		   "counter": 1,
		},
		{
		   "name":"Chain of Responsibility",
		   "values":[
			  "Client",
			  "Handler",
			  "ConcreteHandler1"
		   ],
		   "btnExtension":[0,0,1],
		   "counter": 1,
		},
		{
		   "name":"Command",
		   "values":[
			  "Command",
			  "ConcreteCommand1",
			  "Client",
			  "Invoker",
			  "Receiver"
		   ],
		   "btnExtension":[0,1,0,0,0],
		   "counter": 1,
		},
		{//???/
		   "name":"Interpreter",
		   "values":[
			  "Client",
			  "Context",
			  "AbstractExpression",
			  "TerminalExpression",
			  "NonterminalExpression"
		   ],
		   "btnExtension":[0,0,0,0,0],
		   "counter": 1,
		},
		{///???
		   "name":"Iterator",
		   "values":[
			  "Aggregate",
			  "Client",
			  "Iterator",
			  "ConcreteAggregate1",
			  "ConcreteIterator1"
		   ],
		   "btnExtension":[0,0,0,1,1],
		   "counter": 1,
		},
		{
		   "name":"Mediator",
		   "values":[
			  "Mediator",
			  "Colleague",
			  "ConcreteMediator",
			  "ConcreteColleague1"
		   ],
		   "btnExtension":[0,0,0,1],
		   "counter": 1,
		},
		{///???
		   "name":"Memento",
		   "values":[
			  "Originator",
			  "Memento",
			  "Caretaker"
		   ],
		   "btnExtension":[0,0,0],
		   "counter": 1,
		},
		{//???/
		   "name":"Observer",
		   "values":[
			  "Subject",
			  "Observer",
			  "ConcreteSubject",
			  "ConcreteObserver"
		   ],
		   "btnExtension":[0,0,0,0],
		   "counter": 1,
		},
		{
		   "name":"State",
		   "values":[
			  "Context",
			  "State",
			  "ConcreteState1"
		   ],
		   "btnExtension":[0,0,1],
		   "counter": 1,
		},
		{
		   "name":"Strategy",
		   "values":[
			  "Context",
			  "Strategy",
			  "ConcreteStrategy1"
		   ],
		   "btnExtension":[0,0,1],
		   "counter": 1,
		},
		{
		   "name":"Template Method",
		   "values":[
			  "AbstractClass",
			  "ConcreteClass"
		   ],
		   "btnExtension":[0,0],
		   "counter": 1,
		},
		{
		   "name":"Visitor",
		   "values":[
			  "Client",
			  "Visitor",
			  "ConcreteVisitor1",
			  "ObjectStructure",
			  "Element",
			  "ConcreteElement1"
		   ],
		   "btnExtension":[0,0,1,0,0,1],
		   "counter": 1,
		}
	 ];
	protected render(): React.ReactNode {
		const header = `Choose a Design Pattern and get the code. `;
		
		return <div id='widget-container'>
		<AlertMessage type='INFO' header={header} />
		<br /> 
		<label id="label-URL-project">Provide the Projects's URL</label>
		<input id="URL-project" onChange={this.updateInput} placeholder='Project URL' name="stateURLproject"></input>
		<br />
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
		if (extensionWidget.state.statePatternSelection!="Choose_pattern" && extensionWidget.state.statePatternSelection!="" && extensionWidget.state.stateURLproject!="" && extensionWidget.state.stateURLproject!='Project URL'){
			(document.getElementById("btn-get-code") as HTMLButtonElement).style.visibility = 'hidden';
			 
			//show the JSON values for the chosen key-pattern
			var  index = extensionWidget.arrayOfJSON.findIndex(x => x.name === extensionWidget.state.statePatternSelection);
			console.log(index);
			var values = extensionWidget.arrayOfJSON[index]["values"];
			var btnExtension = extensionWidget.arrayOfJSON[index]["btnExtension"] ;
			var counter = extensionWidget.arrayOfJSON[index]["counter"] ;
			var table = document.getElementById('show_pattern_table') as HTMLTableElement;
			for (var i=0;i< values.length;i++){
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
				cell2.appendChild(t2);
				if(btnExtension[i]==1){
					var cell3 = row.insertCell(2);
					var t3 = document.createElement("button");
					t3.innerHTML = "+";
					t3.id = "btn"+ values[i];
					cell3.appendChild(t3);
					t3.addEventListener('click', (event) => {
						this.buttonClick(table, ( event.target as Element).id, counter +1);
						counter = counter + 1;
					});	
				}
			}
			

		}else if (extensionWidget.state.stateURLproject=='Project URL' || extensionWidget.state.stateURLproject==""){
			this.messageService.info('You need to enter the Theia URL of the project!');
		
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
	buttonClick (table: HTMLTableElement, value: string, counter: integer): void {
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
		t2.autocomplete = "off";
		cell1.appendChild(t1);
		cell2.appendChild(t2);
	}

	updateLabelValue(string : string, counter: integer): string {
		let lastChar = string.slice(-1);
		string = string.replace(lastChar, counter.toString());
		return string;
	}
	
}	



