class AccordionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.accordion
        });
    }
    
    render(){
        const{error, isLoaded, items, activeTab} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="accordion_root container">
                    <div class="accordion accordion-flush" id="accordion_root">
                    {items.map(item => (
                        <Accordion_item key={item.id} id={item.id} header={item.title} values={item.values} parent={"accordion_root"} modal={this.props.modal} handleClick={this.props.handleClick}/>
                    ))}
                    </div>
                </div>
            );
        }
    }
}

class Accordion_item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }
    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div class="accordion-item">
                    <Accordion_header id={this.props.id} header={this.props.header} parent={this.props.parent}/>
                    <Accordion_body id={this.props.id} header={this.props.header} values={this.props.values} parent={this.props.parent} modal={this.props.modal} handleClick={this.props.handleClick}/>
                </div>
            );
        }
    }
}

class Accordion_header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }
    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <h2 class="accordion-header" id={`flush-heading${this.props.id}`}>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${this.props.id}`} aria-expanded="false" aria-controls={`flush-collapse${this.props.id}`}>
                        {this.props.header}
                    </button>
                </h2>
            );
        }
    }
}

class Accordion_body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            id: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.values,
            id: this.props.id
        });
    }
    
    render(){
        const{error, isLoaded, items, id} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div id={`flush-collapse${this.props.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${this.props.id}`} data-bs-parent={`#${this.props.parent}`}>
                    <div className="accordion-body bg-light">
                        {items.map(item => (
                            <div className="d-grid gap-2 d-md-block m-1" key={item.id}>
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <h5 className="user-select-none card-title text-center">{"Информация о вакансии"}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="card bg-white text-dark">
                                            <img src={item.image} className="card-img-top image"  width="256" height="256"/>
                                            <div className="card-img-overlay">
                                                <h5 className="user-select-none card-title">{this.props.header}</h5>
                                                <p className="user-select-none card-text">{`Зарплата: ${item.price}`}</p>
                                            </div>
                                        </div>
                                        <button 
                                            type="button" 
                                            class="btn btn-primary py-1 my-1 w-100" 
                                            data-bs-toggle="modal" 
                                            data-bs-target={`#${this.props.modal}`} 
                                            onClick={(e) => this.props.handleClick(this.props.id, this.props.header, item.price, item.value, e)}
                                        >
                                            {"Подать заявку"}
                                        </button> 
                                    </div>
                                    <div className="card-footer bg-primary text-white">
                                        <p className="user-select-none card-text">{item.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            );
        }
    }
}