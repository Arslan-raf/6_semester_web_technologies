class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    
    componentDidMount(){
        const{error, isLoaded, date} = this.state;
        this.setState({
            isLoaded: true
        });
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
                    <ContentApp />
                    
                </div>
            );
        }
    }
}