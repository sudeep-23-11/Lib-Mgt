import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container   home text-center  align-self-center"
        style={{
            height: '96%',
            display: 'flex',
            flexDirection: 'column',
            alignItems  : 'center',
            

        }}>
        <br/><br/><br/>
            <div style={{
                fontSize : '20px',
            }} className="row mt-3  text-white   text-center justify-content-center">
            <h1 align="center">Welcome to the Central Library</h1>
            </div>
            <div style={{
                width : '60%'
            }} className="row text-white ">

        <br/><br/><br/>
        
            <h6 style={{
                fontSize : '20px',
            }}>
            

            The Central Library is an automated library in terms of records organisation and management of all its different sections, search and discovery, information retrieval and service delivery.
            <br/><br/> </h6>
            </div>
            <div className="row  text-white justify-content-center">
            <div className="row text-white justify-content-center">
    <table style={{ margin: 'auto' }}>
        <tr>
            <th colSpan="2"><h6>Library Timings</h6></th>
        </tr>
        <tr>
            <td style={{ padding: '10px' }}><h6>Opening Time</h6></td>
            <td style={{ padding: '10px' }}><h6>9.00 A.M.</h6></td>
        </tr>
        <tr>
            <td style={{ padding: '10px' }}>Closing Time</td>
            <td style={{ padding: '10px' }}>9.00 P.M.</td>
        </tr>
    </table>
    <br />
    <br />
</div>
            <br/>
            <br/>
                </div>
                <br/><br/>
                <br/><br/><br/>
            </div>
        );
}

}

export default Home;