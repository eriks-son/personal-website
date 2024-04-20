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
                    <a onClick={toggleOpen}>
                        Hide
                    </a>
                    {content}
                    <a onClick={toggleOpen}>
                        Hide
                    </a>
                </div>
            </ShowHide>
        );
    } else {
        return (
            <ShowHide>
                <a onClick={toggleOpen}>
                    {showText}
                </a>
            </ShowHide>
        )
    }
}

const ShowHide = styled.div`
    .contents {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .readMore {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        font-style: normal;
    }
`
