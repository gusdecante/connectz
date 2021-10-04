import React from 'react';
import Typography from '@mui/material/Typography';

import { CustomListItem, CustomListItemText, CustomList } from './styles'

import SetPattern from 'public/assets/icons/tool.svg'
import ProductListing from 'public/assets/icons/package.svg'
import UnitaryRegistration from 'public/assets/icons/plus-square.svg'
import MassRegistration from 'public/assets/icons/share.svg'   
import FollowUp from 'public/assets/icons/git-commit.svg'
import NewPreOrder from 'public/assets/icons/file-plus.svg'
import OrderHistory from 'public/assets/icons/file-text.svg' 
import RequestChange from 'public/assets/icons/edit.svg'
import ProviderUser from 'public/assets/icons/briefcase.svg'
import LaborUser from 'public/assets/icons/user.svg'
import Profile from 'public/assets/icons/settings.svg'
import Logout from 'public/assets/icons/log-out.svg'

const products = [
  {
    text: "Listagem de Produtos",
    icon: ProductListing
  },
  {
    text: "Configurar Padrões",
    icon: SetPattern
  }
]

const registration = [
  {
    text: "Cadastro Unitário",
    icon: UnitaryRegistration
  },
  {
    text: "Cadastro em Massa",
    icon: MassRegistration
  },
  {
    text: "Acompanhamento",
    icon: FollowUp
  }
]

const purchase = [
  {
    text: "Novo Pré-pedido",
    icon: NewPreOrder
  },
  {
    text: "Histórico de Pedido",
    icon: OrderHistory
  },
  {
    text: "Solicitação de Alteração",
    icon: RequestChange
  }
]

const access = [
  {
    text: "Usuários Fornecedores",
    icon: ProviderUser
  },
  {
    text: "Usuários Colaboradores",
    icon: LaborUser
  },
  {
    text: "Perfis",
    icon: Profile
  }
]

export default function FolderList() {
  return (
    <CustomList>
      <Typography
      sx={{ mt: 0.5, ml: 2, mb: 2 }}
      color="text.secondary"
      display="block"
      >
      PRODUTOS
      </Typography>
      {products.map(({text, icon: Icon}) => (
        <CustomListItem>
          <Icon />
          <CustomListItemText 
            primary={text}
          />
        </CustomListItem>
      ))}
      <Typography
      sx={{ mt: 0.5, ml: 2 }}
      color="text.secondary"
      display="block"
      >
      CADASTRO
      </Typography>   
      {registration.map(({text, icon: Icon}) => (
        <CustomListItem>
          <Icon />
          <CustomListItemText 
            primary={text}
          />
        </CustomListItem>
      ))}
      <Typography
      sx={{ mt: 0.5, ml: 2 }}
      color="text.secondary"
      display="block"
      >
      PEDIDOS
      </Typography> 
      {purchase.map(({text, icon: Icon}) => (
        <CustomListItem>
          <Icon />
          <CustomListItemText 
            primary={text}
          />
        </CustomListItem>
      ))}
      <Typography
      sx={{ mt: 0.5, ml: 2 }}
      color="text.secondary"
      display="block"
      >
      ACESSO
      </Typography> 
      {access.map(({text, icon: Icon}) => (
        <CustomListItem>
          <Icon />
          <CustomListItemText 
            primary={text}
          />
        </CustomListItem>
      ))}
      <CustomListItem style={{marginTop: '4em'}}>
        <Logout />
        <CustomListItemText primary="Sair" />
      </CustomListItem> 
    </CustomList>
  );
}
