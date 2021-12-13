import React  from 'react';
import { Cabecalho } from './styled'

export default function Header() {
    return(
        <Cabecalho>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>

                    <li>
                        <a href='#'>Empresa</a>
                    </li>

                    <li>
                        <a href='#'>Contato</a>
                    </li>
                </ul>
            </nav>
        </Cabecalho>
    )
}