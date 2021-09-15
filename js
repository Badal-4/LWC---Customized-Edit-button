import { LightningElement ,wire,track} from 'lwc';
import getAcc from '@salesforce/apex/accController.getAcc';
export default class ZCmp extends LightningElement 
{
    accounts;
    @track recordId;
    @track isModalOpen = false;
    connectedCallback()
    {
        getAcc({}).then(result => 
            {
                this.accounts = result;
            });
    }
    handleEdit(event)
    {
        const selectedId = event.target.name;
        this.isModalOpen = true;
        this.recordId = selectedId;
    }
}
