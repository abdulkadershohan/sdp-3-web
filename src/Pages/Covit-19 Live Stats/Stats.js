import React, {useEffect,useState} from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck"
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from "react-columns"
import axios from "axios"
import Form from "react-bootstrap/Form";


function Stats(){
    const [latest,setLatest]=useState("");
    const [results,setResult]=useState([])
    const [searchCountry,setSearchCountry]=useState("")


    useEffect(()=>{
        axios
            .all([
                axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
                axios.get("https://disease.sh/v3/covid-19/countries")

            ])
            .then(responseArr=>{
                setLatest(responseArr[0].data);
                setResult(responseArr[1].data)
            })
            .catch(err=>{
                console.log(err);
            });

    },[]);
    const date=new Date(parseInt(latest.updated));
    const lastUpdated =date.toString();

    const filterCountry=results.filter(item=>{
        return searchCountry !==""?item.country.includes(searchCountry):item;
    })

    const countries=filterCountry.map((data, i)=>{

        return (

            <Card
                key={i}
                big="light"
                text="dark"
                className="text-center"

                style={{margin:"10px"}}
            >
                <Card.Img variant={"top"} src={data.countryInfo.flag}/>
                <Card.Body>
                    <Card.Title>{data.country}</Card.Title>
                    <Card.Text>Cases {data.cases}</Card.Text>
                    <Card.Text>Deaths {data.deaths}</Card.Text>
                    <Card.Text>Recovered {data.recovered}</Card.Text>
                    <Card.Text>Today's Cases {data.todayCases}</Card.Text>
                    <Card.Text>Today's deaths {data.todaysDeaths}</Card.Text>
                    <Card.Text>Active {data.active}</Card.Text>
                    <Card.Text>Critical {data.critical}</Card.Text>


                </Card.Body>
            </Card>
        );

    });
    var queries=[{
        columns: 2,
        query: 'min-width: 50px'
    },{
        columns: 3,
        query: 'min-width:1000px'
    }]

    return (
        <div>
             <span>
                    <h3 className="text-center"><font color="#17d1ac">REFERENCE</font> <span><a href="https://www.worldometers.info/coronavirus/" target="_blank">Worldometers</a> </span></h3>
                </span>

            <CardDeck>
                <Card
                    bg="secondary" text="white"
                    className={"text-center"}
                    style={{margin:"10px"}}
                >

                    <Card.Body>
                        <Card.Title>Cases</Card.Title>
                        <Card.Text>{latest.cases}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
                <Card
                    bg="danger" text={"white"}
                    className={"text-center"}
                    style={{margin:"10px"}}
                >

                    <Card.Body>
                        <Card.Title>Deaths</Card.Title>
                        <Card.Text>{latest.deaths}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
                <Card bg={"success"}
                      text={"white"}
                      className={"text-center"}
                      style={{margin:"10px"}}
                >

                    <Card.Body>
                        <Card.Title>Recovered</Card.Title>
                        <Card.Text>{latest.recovered}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br/>
            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Control type="text" placeholder="Search a country" onChange={e=>setSearchCountry(e.target.value)} />
                </Form.Group>
            </Form>
            <br/>


            <Column queries={queries}>{countries}</Column>




        </div>





    );
}


export default Stats;