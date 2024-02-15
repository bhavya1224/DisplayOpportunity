import { LightningElement, wire, track, api } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class OpportunityAmountLwc extends LightningElement {
   /* @track accountOptions = [];
    @track searchItem;
    @api placeholder = "Search Account";
    @api label = "Account";

    @wire(getAccounts, { searchTerm: '$searchItem' })
    wiredAccounts({ error, data }) {
        if (data) {
            console.log("data => "+ JSON.stringify(data));
            this.accountOptions = data;
            console.log(this.accountOptions);
        } else if (error) {
            console.log('error');
        }
    }

    changeHandler(event){
        console.log("reached here 1= > " );
        let acc = event.target.value;
          console.log("reached here acc= > " + acc);
        this.searchItem = acc; 
        console.log("reached here = > " + this.searchItem);

    }

    clickHandler(event){
        let recid = event.target.getAttribute("data-recid");
        console.log(recid);
    }
*/
   
     
}