class ContentApp extends React.Component{
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
        if (this.props.items !== prevProps.items) {
            this.setState({
                items: this.props.items
            });
        }
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
                <div className="content container-fluid border-start border-end border-primary border border-1">
                    <iframe className="container-fluid" src="game.html" width="1366" height="800">
                    </iframe>
                </div>
            );
        }
    }
}