import { LightningElement, wire,track, api } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const columns = [ 
                    { label: 'Opportunity Name', fieldName: 'Name' },
                    { label: 'Amount', fieldName: 'Amount', type: 'currency',typeAttributes: { currencyCode: 'USD' }, cellAttributes: { class: { fieldName: 'amountClass' } } }
                ];


export default class DisplayOppUsingLookUp extends LightningElement {
    searchTerm = '';
    searchResults;
    @track hasRecords = false;
    selectedId = '';
    recordClicked = false;
    error;
   @track records;
   columns = columns;
   
   
  @wire(getRelatedListRecords, {
    parentRecordId: '$selectedId',
    relatedListId: 'Opportunities',
    fields: ['Opportunity.Id', 'Opportunity.Name', 'Opportunity.Amount'],
    where: '{Amount: { gt: 5000 }}'
  })
  listInfo({ error, data }) {
    if (data) {
      this.records = data.records.map(record => ({
                amountClass: record.fields.Amount.value > 10000 ? "slds-icon-custom-custom6 slds-text-color_default" : '',
                Id: record.fields.Id.value,
                Name: record.fields.Name.value,
                Amount: record.fields.Amount.value,
            }));
    
      console.log('records=>  '+ JSON.stringify(this.records));
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.records = undefined;
      console.log(error);
    }
  }
    
    handleSearch(event) {
        this.searchTerm = event.target.value;
        this.recordClicked = false;
    }

    @wire(getAccounts, { searchTerm: '$searchTerm' })
    wiredSearchResults({ error, data }) {
        if (data) {
            this.searchResults = data;
            console.log('wiredSearchResults');
            console.log(this.searchTerm);
            this.hasRecords = this.searchTerm ===''?false:true;
            console.log(JSON.stringify(data))
        } else if (error) {
            console.log(JSON.stringify(error))
        }
    }

    handleResultSelection(event) {
        this.selectedId = event.currentTarget.dataset.id;
        this.searchTerm = event.currentTarget.dataset.name;

        this.recordClicked = true;
        this.hasRecords = false;
    }
}