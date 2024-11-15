import React, {useState} from 'react';
import styled from 'styled-components';

export const ReadMore = ({content, showText}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    if (open) {
        return (
            <ShowHide>
                <div className='contents'>
                    <button onClick={toggleOpen}>
                        Hide
                    </button>
                    {content}
                    <button onClick={toggleOpen}>
                        Hide
                    </button>
                </div>
            </ShowHide>
        );
    } else {
        return (
            <ShowHide>
                <button onClick={toggleOpen}>
                    {showText}
                </button>
            </ShowHide>
        )
    }
}

const ShowHide = styled.div`
    .contents {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid;
        border-radius: 15px;
        border-color: #8392E7;
        padding: 20px;
    }

    .readMore {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        color: #8392E7;
        text-decoration: none;
        font-size: 20px;
        font-style: normal;
    }
`
