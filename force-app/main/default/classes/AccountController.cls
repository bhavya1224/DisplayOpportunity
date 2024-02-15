public with sharing class AccountController {
     @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchTerm) {
        list<Account> newList = new List<account>();
         if(searchTerm!=''){
            searchTerm = '%' + searchTerm + '%';
            system.debug('searchTerm '+ searchTerm);
           
                 newList =  [SELECT Id, Name FROM Account WHERE Name LIKE :searchTerm LIMIT 5];
                 return newList;
            }
            else{
                return newList;
            }
        
           
        
        
         
    }
}