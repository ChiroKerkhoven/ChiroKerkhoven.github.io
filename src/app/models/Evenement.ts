class Evenement extends ChiroSiteClass{
    evenementTitle : string;
    evenementShortDescription: string;
    evenementLongDescription: string;
    evenementImageName : string;

    constructor( priority : number, evenementTitle : string, evenementShortDescription: string, evenementLongDescription: string, evenementImageName : string){
        super(priority);
        this.evenementTitle = evenementTitle;
        this.evenementShortDescription = evenementShortDescription;
        this.evenementLongDescription = evenementLongDescription;
        this.evenementImageName = evenementImageName;
    }
}