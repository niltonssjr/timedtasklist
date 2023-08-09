import styled from 'styled-components'
import { TButton } from "./TButton";

export const TSquareButton = styled(TButton)<{ size?: string}>`
    --dimension: ${
        prop => {
            const sizes : Record<string, number> = {
                sm: 10,
                md: 30
            }
            return `${sizes[prop.size || 'md'] || sizes['md']}px;`
        }
    }
    display: inline-block;
    width: var(--dimension);
    height: var(--dimension);
`