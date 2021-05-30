class ModalConfirm extends React.Component{
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
                    id={this.props.modal} 
                    tabindex="-1" 
                    aria-labelledby={`${this.props.modal}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <ModalHeader modal={this.props.modal} title={this.props.title}/>
                            <ModalBody fio={this.props.fio} handleClickGender={this.props.handleClickGender} value={this.props.value} gender={this.props.gender} info={this.props.info} handleChange={this.props.handleChange}/>
                            <ModalFooter alert={this.props.alert}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class ModalHeader extends React.Component{
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
                    <h1 class="modal-title user-select-none fs-2" id={`${this.props.modal}Label`}>{this.props.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            );
        }
    }
}

class ModalBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            info: [],
            gender: "",
            value: 1,
            fio: ""
        };
    }
    
    
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            info: this.props.info,
            gender: this.props.gender,
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
        if (this.props.fio !== prevProps.fio) {
            this.setState({
                fio: this.props.fio
            });
        }
    }
    
    render(){
        const{error, isLoaded, info, gender, value, fio} = this.state;
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
                     <div class="form-floating my-1">
                        <input type="text" class="form-control" name="fio" value={fio} id="fio" placeholder="Введите имя" onChange={this.props.handleChange}/>
                        <label for="fio">{"Введите имя"}</label>
                    </div>
                    
                    <div class="form-floating my-1">
                        <input type="text" class="form-control" name="gender" value={gender} id="gender" placeholder="Выберите пол" data-bs-toggle="dropdown" aria-expanded="false" onChange={this.props.handleChange}/>
                        <label for="gender">{"Выберите пол"}</label>
                        <ul className="dropdown-menu" aria-labelledby={"gender"}>
                            <li>
                                <h5 className="dropdown-item user-select-none" onClick={(e) => this.props.handleClickGender(`Мужской`, e)}> {`Мужской`}</h5>
                            </li>
                            <li>
                                <h5 className="dropdown-item user-select-none" onClick={(e) => this.props.handleClickGender(`Женский`, e)}> {`Женский`}</h5>
                            </li>
                            <li>
                                <h5 className="dropdown-item user-select-none" onClick={(e) => this.props.handleClickGender(`Другой`, e)}> {`Другой`}</h5>
                            </li>
                        </ul>
                    </div>
                    <div class="input-group my-1">
                        <label for="value" class="user-select-none form-label">Коэф. желаемой зарплаты: {value}</label>
                        <input type="range" name="value" list="range" min="1" max="2" value={value} step="0.1" class="form-range" id="value" onChange={this.props.handleChange}/>
                    </div>
                    <DatePickerApp date={this.props.date} handleChange={this.props.handleChange} changeHandler={this.props.changeHandler}/>
                </div>
            );
        }
    }
}

class ModalFooter extends React.Component{
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
                <div className="modal-footer bg-primary text-white">
                    <button type="button" class="btn btn-dark" data-bs-target={`#${this.props.alert}`} data-bs-toggle="modal" data-bs-dismiss="modal">Подать</button>
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Закрыть</button>
                </div>
            );
        }
    }
}