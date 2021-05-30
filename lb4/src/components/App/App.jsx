class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            info: {},
            id: 1,
            header: "",
            price: 1,
            value: 1,
            gender: "",
            date: moment(),
            fio: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.datepicker = React.createRef();
        this.changeHandler = this.changeHandler.bind(this);
        this.handleClickGender = this.handleClickGender.bind(this);
    }
    
    handleClickGender(lvalue, event){
        this.setState({
            gender: lvalue
        });
    }
    
    changeHandler(e){
        const{date} = this.state;
        let currentDate = $("#datepicker").datepicker( "getDate" );
        this.setState({
            date: currentDate
        });
    }
    
    handleClick(lid, lheader, lprice, lvalue, event){
        const{error, isLoaded, id, header, price, value, info} = this.state;
        let linfo = {
            id: lid,
            header: lheader,
            price: lprice,
            value: lvalue
        }
        let name = "name";
        this.setState(state => ({      info: linfo}));
    }
    
    componentDidMount(){
        const{error, isLoaded, date} = this.state;
        let a = {
            iofile: "data/App.json"
        }
        fetch("src/api/load.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(a)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        this.setState({
            date: date.format("DD.MM.YYYY")
            //date: date.format('YYYY-MM-DD')
        });
    }
    
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
        /*console.log(event);
        console.log(name);
        console.log(value);*/
    }
    
    componentDidUpdate(prevProps){
        
    }
    
    render(){
        const{error, isLoaded, value,items, info, gender, date, fio} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            let mC = "confirm";
            let mA = "alert";
            return(
                <div className="app">
                    <HeaderApp />
                    <ContentApp modal={mC} accordion={items.accordion} handleClick={this.handleClick}/>
                    
                    <ModalConfirm fio={fio} handleClickGender={this.handleClickGender} datepicker={this.props.datepicker} date={this.props.date} value={value} handleChange={this.handleChange} gender={gender} info={info} alert={mA} modal={mC} title={"Подтверждение заявки"} />
                    <ModalAlert fio={fio} value={value} gender={gender} date={date} info={info} alert={mA} modal={mC} title={"Заявка подана"} />
                </div>
            );
        }
    }
}