import React, { useState } from 'react';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';
import NewListSidebarButton from './NewListSidebarButton';

import UnderlineInput from 'components/common/UnderlineInput';

const Home = (props) => {
    const [val, setVal] = useState('');
    const [valTwo, setValTwo] = useState('');
    const [valThree, setValThree] = useState('');

    return (
        <LeftSidebar
            sidebarContent={
                <NewListSidebarButton onClick={() => {}}/>
            }
        >
            <div>
                <UnderlineInput
                    label="Title"
                    value={valTwo}
                    onChange={(e) => setValTwo(e.target.value)}
                />
                <UnderlineInput
                    label="URL"
                    value={valThree}
                    onChange={(e) => setValThree(e.target.value)}
                />
                <UnderlineInput
                    label="Description"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
            </div>
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(Home);
