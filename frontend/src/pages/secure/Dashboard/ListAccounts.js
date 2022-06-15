import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import AccountsService from '../../../services/accountService';
import Loading from './Loading';

function ListAccountsRow({listAccounts}){

  return(    

    listAccounts.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.createdAt}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
      </TableRow>
    ))

  )

}

class ListAccounts extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isLoading: true,
      listAccounts: []
    }

  }

  async componentDidMount(){

    const service = new AccountsService();
    const result = await service.getAccounts();

    this.setState({
      isLoading: false,
      listAccounts: result,
    });

  }



  render(){

    const {isLoading, listAccounts} = this.state;

    return (
      <React.Fragment>
        {isLoading && <Loading />}
        <Title>Contas Cadastradas</Title>        
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>           
            </TableRow>
          </TableHead>  
          <TableBody>         
          {!isLoading && <ListAccountsRow listAccounts={listAccounts} />} 
          </TableBody>
        </Table>
  
      </React.Fragment>
    );
  }

}
export default ListAccounts