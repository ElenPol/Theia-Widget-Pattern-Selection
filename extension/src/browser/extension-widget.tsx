import * as React from 'react';

import { injectable, postConstruct, inject } from 'inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
//import * as data from './data.json';


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
	//handleChange(e: { target: { value: any; }; }) {
		//console.log("Pattern Selected!!");
		//this.messageService.info('DesignPattern Selected');
        //extensionWidget.setState({ statePatternSelection : e.target.value });
		//extensionWidget.setState({ stateURLproject : e.target.value });
	  //}
	
	static a = [
		{
		   "name":"Abstract Factory",
		   "values":[
			  "AbstractFactory",
			  "ConcreteFactory1",
			  "ConcreteFactory2",
			  "AbstractProductA",
			  "ProductA2",
			  "ProductA1",
			  "Client",
			  "AbstractProductB",
			  "ProductB2",
			  "ProductB1"
		   ]
		},
		{
		   "name":"Builder",
		   "values":[
			  "Director",
			  "Builder",
			  "ConcreteBuilder",
			  "Product"
		   ]
		},
		{
		   "name":"Factroy Method",
		   "values":[
			  "Product",
			  "ConcreteProduct",
			  "Creator",
			  "ConcreteCreator"
		   ]
		},
		{
		   "name":"Prototype",
		   "values":[
			  "Client",
			  "Prototype",
			  "ConcreteProtottype1",
			  "ConcretePrototype2"
		   ]
		},
		{
		   "name":"Singleton",
		   "values":[
			  "Singleton"
		   ]
		},
		{
		   "name":"Adapter",
		   "values":[
			  "Client",
			  "Target",
			  "Adapter",
			  "Adaptee"
		   ]
		},
		{
		   "name":"Bridge",
		   "values":[
			  "Client",
			  "Abstraction",
			  "RefinedAbstraction",
			  "Implementor",
			  "ConcreteImplementorA",
			  "ConcreteImplementorB"
		   ]
		},
		{
		   "name":"Composite",
		   "values":[
			  "Client",
			  "Component",
			  "Leaf",
			  "Composite"
		   ]
		},
		{
		   "name":"Decorator",
		   "values":[
			  "Component",
			  "ConcreteComponent",
			  "Decorator",
			  "ConcreteDecoratorA",
			  "ConcreteDecoratorB"
		   ]
		},
		{
		   "name":"Facade",
		   "values":[
			  ""
		   ]
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
		   ]
		},
		{
		   "name":"Proxy",
		   "values":[
			  "Subject",
			  "Proxy",
			  "RealSubject"
		   ]
		},
		{
		   "name":"Chain of Responsibility",
		   "values":[
			  "Client",
			  "Handler",
			  "ConcreteHandler1",
			  "ConcreteHandler2"
		   ]
		},
		{
		   "name":"Command",
		   "values":[
			  "Command",
			  "ConcreteCommand",
			  "Client",
			  "Invoker",
			  "Receiver"
		   ]
		},
		{
		   "name":"Interpreter",
		   "values":[
			  "Client",
			  "Context",
			  "AbstractExpression",
			  "TerminalExpression",
			  "NonterminalExpression"
		   ]
		},
		{
		   "name":"Iterator",
		   "values":[
			  "Aggregate",
			  "Client",
			  "Iterator",
			  "ConcreteAggregate",
			  "ConcreteIterator"
		   ]
		},
		{
		   "name":"Mediator",
		   "values":[
			  "Mediator",
			  "Colleague",
			  "ConcreteMediator",
			  "ConcreteColleague1",
			  "ConcreteColleague2"
		   ]
		},
		{
		   "name":"Memento",
		   "values":[
			  "Originator",
			  "Memento",
			  "Caretaker"
		   ]
		},
		{
		   "name":"Observer",
		   "values":[
			  "Subject",
			  "Observer",
			  "ConcreteSubject",
			  "ConcreteObserver"
		   ]
		},
		{
		   "name":"State",
		   "values":[
			  "Context",
			  "State",
			  "ConcreteStateA",
			  "ConcreteStateB"
		   ]
		},
		{
		   "name":"Strategy",
		   "values":[
			  "Context",
			  "Strategy",
			  "ConcreteStrategyA",
			  "ConcreteStrategyB"
		   ]
		},
		{
		   "name":"Template Method",
		   "values":[
			  "AbstractClass",
			  "ConcreteClass"
		   ]
		},
		{
		   "name":"Visitor",
		   "values":[
			  "Client",
			  "Visitor",
			  "ConcreteVisitor1",
			  "ConcreteVisitor2",
			  "ObjectStructure",
			  "Element",
			  "ConcreteElementA",
			  "ConcreteElementB"
		   ]
		}
	 ];
	protected render(): React.ReactNode {
		const header = `Choose a Design Pattern and get the code. `;
		
		return <div id='widget-container'>
		<AlertMessage type='INFO' header={header} />
		<br /> 
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
			//(document.getElementById('show_pattern') as HTMLElement).innerHTML = "This is the pattern you selected: " + extensionWidget.state.statePatternSelection;
			
			var url = extensionWidget.state.stateURLproject;
			var folderpath = url.substring(url.indexOf('c:'));
			alert("Folder path: " + folderpath);
			/*const fs = require('fs');
			console.log("fs= ",fs);
			fs.readdirSync(foldername).forEach((file: any) => {
							console.log("File: " + file);
						});*/
			
				
			//show the JSON values for the chosen key-pattern
			var  index = extensionWidget.a.findIndex(x => x.name === extensionWidget.state.statePatternSelection);
			console.log(index);
			var k = extensionWidget.a[index]["values"];
			console.log(k);
			var table = document.getElementById('show_pattern_table') as HTMLTableElement;
			for (var i=0;i< k.length;i++){
				var row = table.insertRow(i);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var t1 = document.createElement("label"+i);
				t1.innerHTML = k[i];
				var t2 = document.createElement("input"+i);
				cell1.appendChild(t1);
				cell1.style.width = "200px";
				cell2.appendChild(t2);
				cell2.style.width = "200px";
			}
			//document.getElementById('btn-get-classes').style.display = "block";
			
			
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
	
}	
