import React from "react";
import './Level.css'
import Topic from "../Topic/Topic";

export default function Leveljava() {
  return (
    <div>
      <Topic/>
      <main>

      <div className="head"><h1 class="head-c">JAVA PROGRAMMING</h1></div>
        <div class="conatinerforc">
            <div class="row-1">
                <ul>
                    <li>S.NO</li>
                    <li>LEVEL </li>
                    <li>QUESTIONS</li>
                    <li>ACTION</li>
                </ul>
                <hr/>
            </div>
            <div class="row-1">
                <ul>
                    <li>1</li>
                    <li>JAVA LEVEL-1 </li>
                    <li>100</li>
                    <li><button className="view">View</button></li>
                </ul>
                <hr/>
            </div>
            <div class="row-1">
                <ul>
                    <li>2</li>
                    <li>JAVA LEVEL-2</li>
                    <li>100</li>
                    <li><button className="view">View</button></li>
                </ul>
                <hr/>
            </div>
            <div class="row-1">
                <ul>
                    <li>3</li>
                    <li>JAVA LEVEL-3</li>
                    <li>100</li>
                    <li><button className="view">View</button></li>
                </ul>
                <hr/>
            </div>
        </div>
         
    </main>
    </div>
  )
}


