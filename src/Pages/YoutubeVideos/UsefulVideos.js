import React from 'react';
import ReactPlayer from "react-player";
import './UsefulVideos.css'
import * as BsIcons from 'react-icons/bs';

function UsefulVideos () {

        return (
            <>
                <div className={"useful-videos"}>

                    <br/>
                    <h1><BsIcons.BsCollectionPlay/>   Useful Videos</h1>
                    <br/>

                    <div className={"videos"}>

                        <li><ReactPlayer url={"https://www.youtube.com/watch?v=440LVMY8lO4&feature=youtu.be&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>
                        <li><ReactPlayer url={"https://www.youtube.com/watch?v=i3CkI9Edm3o&feature=youtu.be&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>
                        <li><ReactPlayer url={"https://www.youtube.com/watch?v=l4jPbHJ1xF0&feature=youtu.be&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>
                        <li> <ReactPlayer url={"https://www.youtube.com/watch?v=GVPJHDp29tg&feature=youtu.be&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>
                        <li><ReactPlayer url={"https://www.youtube.com/watch?v=Px-jmUQ9h0k&feature=youtu.be&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>
                        <li> <ReactPlayer url={"https://www.youtube.com/watch?v=kT3qI2xN7Ws&feature=youtu.be&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>
                        <li> <ReactPlayer url={"https://www.youtube.com/watch?v=Z7zwBs52rr4&feature=youtu.be&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>
                        <li> <ReactPlayer url={"https://www.youtube.com/watch?v=PhGfCfOenAc&ab_channel=HumanDevelopmentMedia"} controls={true}/></li>





                    </div>
                </div>



            </>

        );

}

export default UsefulVideos;