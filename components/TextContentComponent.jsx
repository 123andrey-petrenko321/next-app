import { Text } from '@chakra-ui/react';
import React from 'react';

const TextContentComponent = () => {
    return (
       <Text 
        fontFamily="Lato"
        fontWeight="400"
        lineHeight="25px"
        fontSize="18px"
        opacity="0.8"
        p="0 32px 32px 32px"
       >
            Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam.  Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut.<br/>
            <br/>
            Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in.
       </Text>
    );
};

export default TextContentComponent;