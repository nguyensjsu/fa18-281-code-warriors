import React, {Component} from 'react';
import Header from '../Header/Header';
import axios from 'axios'


class Transaction extends Component{

    constructor(props){
        super(props);
        this.state={
            transactions: []
        }
    }

    componentWillMount() {
        axios.get('http://localhost:3000/getAllTransactionByUser/12345').then((response) => {
            console.log(response.data);
            if(response.status === 200){
                this.setState({
                    transactions: response.data
                })
            }

        })
    }




    render(){
        return(
            <div className="container">
                <Header/>

                    <p style={{ color: "white"}}>Recent Transactions</p> <br />
                    {this.state.transactions.map((transaction) => (
                        <div key={transaction.id} >
                            {transaction.id}<br/>
                            Books: {transaction.books.map((book) => (
                            <div key={book.id} >
                                {book.bookid}<br/>
                            </div>
                            ))}
                        </div>
                    ))}


            </div>


        );
    }
}

export default Transaction;