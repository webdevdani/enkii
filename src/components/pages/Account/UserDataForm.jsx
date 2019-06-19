import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { useAuthUser } from 'modules/AuthUser';
import Headline, { SIZE_LARGE, SIZE_SMALL } from 'components/common/Headline';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import UserAvatar from 'components/common/UserAvatar';
import ImageUploadWrapper from 'components/common/ImageUploadWrapper';
import WarningDialog from 'components/common/WarningDialog';

const userAvatarPreset = process.env.REACT_APP_CLOUDINARY_USER_AVATAR_UPLOAD_PRESET;

const ImageSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: ${props => props.theme.paddingM};
    align-items: center;
`;

const UserDataForm = (props) => {
    const user = useAuthUser();
    const [name, setName] = useState(user.displayName || '');
    const [photoUrl, setPhotoUrl] = useState(user.photoURL || '');
    const [networkError, setNetworkError] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        user.updateProfile({
            displayName: name,
            photoURL: photoUrl,
        })
            .then(() => props.onSave())
            .catch((error) => {
                error && error.message && setNetworkError(error.message);
            });
    };

    const handleImageUpload = (error, result) => {
        if (result.event === 'success') {
            setPhotoUrl(result.info.url);
        } else if (error && error.message) {
            setNetworkError(error.message);
        }
    };

    return (
        <section>
            <Headline as="h1">Edit Profile</Headline>
            <form onSubmit={handleFormSubmit}>
                <ImageSection>
                    <UserAvatar photoUrl={photoUrl} />
                    <div style={{ marginLeft: '1rem' }}>
                        <ImageUploadWrapper
                            uploadPreset={userAvatarPreset}
                            onUpload={handleImageUpload}
                        >
                            {(openImageUploader) =>
                                <Button
                                    onClick={openImageUploader}
                                    type="button"
                                    secondary
                                >
                                    Edit Image
                                </Button>
                            }
                        </ImageUploadWrapper>
                    </div>
                </ImageSection>
                <Input
                    label="Display Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    required
                />
                <Button type="submit">Save Profile</Button>
            </form>
            {networkError &&
                <WarningDialog
                    message={networkError}
                    onRequestClose={() => setNetworkError('')}
                />
            }
        </section>
    );
}

UserDataForm.propTypes = {
    onSave: PropTypes.func.isRequired,
};

UserDataForm.defaultProps = {

};

export default UserDataForm;
