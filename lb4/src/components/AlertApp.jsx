class ModalAlert extends React.Component{
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
    
    componentDidUpdate(prevProps) {
        
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
                <div 
                    className="modal fade"
                    id={this.props.alert} 
                    tabindex="-1" 
                    aria-labelledby={`${this.props.alert}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <ModalAlertHeader alert={this.props.alert} title={this.props.title}/>
                            <ModalAlertBody fio={this.props.fio} date={this.props.date} value={this.props.value} gender={this.props.gender} info={this.props.info}/>
                            <ModalAlertFooter modal={this.props.modal}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class ModalAlertHeader extends React.Component{
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
    
    componentDidUpdate(prevProps) {
        
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
                <div className="modal-header bg-primary text-white">
                    <h1 class="modal-title user-select-none fs-2" id={`${this.props.alert}Label`}>{this.props.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            );
        }
    }
}

class ModalAlertBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            info: [],
            gender: "",
            value: 1,
            date: moment(),
            fio: ""
        };
        
    }
    
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            info: this.props.info,
            gender: this.props.gender,
            date: this.props.date,
            fio: this.props.fio
        });
    }   
    
    componentDidUpdate(prevProps) {
        if (this.props.info !== prevProps.info) {
            this.setState({
                info: this.props.info
            });
        }
        if (this.props.gender !== prevProps.gender) {
            this.setState({
                gender: this.props.gender
            });
        }
        if (this.props.value !== prevProps.value) {
            this.setState({
                value: this.props.value
            });
        }
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
        if (this.props.fio !== prevProps.fio) {
            this.setState({
                fio: this.props.fio
            });
        }
    }
    
    render(){
        const{error, isLoaded, info, gender, value, date, fio} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="modal-body bg-primary text-dark">
                    <div class="input-group my-1">
                        <span class="input-group-text user-select-none" id="header">Вакансия:</span>
                        <input class="form-control" type="text" placeholder={`${info.header}`} aria-label="header" aria-describedby="header" disabled readonly/>
                    </div>
                    <div class="input-group my-1">
                        <span class="input-group-text user-select-none" id="info">Предлагаемая запрлата:</span>
                        <input class="form-control" type="text" placeholder={`${info.price}`} aria-label="info" aria-describedby="info" disabled readonly/>
                    </div>
                    <div class="input-group my-1">
                        <span class="input-group-text user-select-none" id="price">Желаемая зарплата:</span>
                        <input class="form-control" type="text" placeholder={`${info.price*value}`} aria-label="price" aria-describedby="price" disabled readonly/>
                    </div>
                    <div class="input-group my-1">
                        <span class="input-group-text user-select-none" id="fio">Имя:</span>
                        <input class="form-control" type="text" placeholder={`${fio}`} aria-label="fio" aria-describedby="fio" disabled readonly/>
                    </div>
                    <div class="input-group my-1">
                        <span class="input-group-text user-select-none" id="gender">Пол:</span>
                        <input class="form-control" type="text" placeholder={`${gender}`} aria-label="gender" aria-describedby="gender" disabled readonly/>
                    </div>
                    <div class="input-group my-1">
                        <span class="input-group-text user-select-none" id="value">Коэф. желаемой зарплаты:</span>
                        <input class="form-control" type="text" placeholder={`${value}`} aria-label="value" aria-describedby="gender" disabled readonly/>
                    </div>
                    <div class="input-group my-1">
                        <span class="input-group-text user-select-none" id="gender">Дата отправления</span>
                        <input class="form-control" type="text" placeholder={`${date}`} aria-label="gender" aria-describedby="gender" disabled readonly/>
                    </div>
                </div>
            );
        }
    }
}

class ModalAlertFooter extends React.Component{
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
    
    componentDidUpdate(prevProps) {
        
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
                <div className="modal-footer bg-primary text-dark">
                    <button type="button" class="btn btn-dark" data-bs-target={`#${this.props.modal}`} data-bs-toggle="modal" data-bs-dismiss="modal">Назад</button>
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Закрыть</button>
                </div>
            );
        }
    }
}