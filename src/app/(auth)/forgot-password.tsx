import { Link, router } from 'expo-router';

import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';

import { useSession } from '@/utils/ctx';
import { Card } from '@/components/ui/card';
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { AlertCircleIcon } from '@/components/ui/icon';
import { Divider } from '@/components/ui/divider';

export default function ForgotPassword() {
    const { signIn } = useSession();
    return (
        <Box className='flex flex-1 justify-center'>
            <Box className='w-full max-w-md mx-auto px-4'>
                <VStack space='md'>
                    <Card size="lg" variant='outline'>
                        <VStack space="lg">
                            <Heading size="xl">
                                Forgot Password
                            </Heading>
                            <FormControl>
                                <FormControlLabel className="mb-1">
                                    <FormControlLabelText>Email</FormControlLabelText>
                                </FormControlLabel>
                                <Input>
                                    <InputField type="text" placeholder="" />
                                </Input>
                                <FormControlHelper>
                                    <FormControlHelperText>
                                        Enter your registered email.
                                    </FormControlHelperText>
                                </FormControlHelper>
                            </FormControl>
                            <Button
                                disabled
                                className='mt-4'
                            >
                                <ButtonText>
                                    Reset Password
                                </ButtonText>
                            </Button>
                            <Divider />
                            <Link
                                suppressHighlighting
                                href="/"
                                asChild
                            >
                                <Button variant="outline">
                                    <ButtonText>Back to Sign In</ButtonText>
                                </Button>
                            </Link>
                        </VStack>
                    </Card>
                </VStack>
            </Box>
        </Box>
    );
}
