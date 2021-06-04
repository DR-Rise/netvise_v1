import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import style from "./page.module.css"
import Comment from "./Comment";

import AuthenticationButton from "../components/authentication-button";



  

export default class info extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment : "", name : "", comments : []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {...this.state, id : uuidv4()}
        this.setState({
            comments : [...this.state.comments, newComment], comment : "", name : ""
        })
    }
    handleCall = (id) => {
        this.setState({
            comments : this.state.comments.filter(c => c.id !== id)
        })
    }
    render() {
        const commentlist = this.state.comments.map((c) => <Comment callBack = {this.handleCall} name={c.name} comment={c.comment} key={c.id} />)
        return(
            <>
            <div className ={style.logbutton} >
            <AuthenticationButton/>
            </div>

            <div className={style.info}>
                <h1 className={style.title}>Feel Free to Add a Comment</h1>
            <form className={style.infoform} onSubmit={this.handleSubmit}>
                <input className={style.name} placeholder="Add your name..." type="text" name = "name" onChange={this.handleChange} value={this.state.name} /><br></br>
                <input className={style.comment} placeholder="Add comment..." type="text" name = "comment" onChange={this.handleChange} value={this.state.comment}/><br></br>
                <button>Add</button>
            </form>
            {commentlist}
            
        </div>
        </>
        )
    }
}
