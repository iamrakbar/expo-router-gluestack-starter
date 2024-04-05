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

export default function SignIn() {
    const { signIn } = useSession();
    return (
        <Box className='flex flex-1 justify-center'>
            <Box className='w-full max-w-md mx-auto px-4'>
                <Card size="lg" variant='outline'>
                    <VStack space="lg">
                        <Heading size="xl">
                            Sign In
                        </Heading>
                        <FormControl>
                            <FormControlLabel className="mb-1">
                                <FormControlLabelText>Email</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField type="text" placeholder="" />
                            </Input>
                        </FormControl>
                        <FormControl>
                            <FormControlLabel className="mb-1">
                                <FormControlLabelText>Password</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField type="password" placeholder="" />
                            </Input>
                        </FormControl>
                        <Button
                            onPress={() => {
                                signIn();
                                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                                // successful before navigating.
                                router.replace('/');
                            }}
                            className='mt-4'>
                            <ButtonText>
                                Sign In
                            </ButtonText>
                        </Button>
                        <Box className='flex items-end px-6'>
                            <Link
                                suppressHighlighting
                                href="/forgot-password"
                            >
                                <Text>Forgot Password?</Text>
                            </Link>
                        </Box>
                        <Divider />
                        <Text>Dont have an account?</Text>
                        <Link
                            suppressHighlighting
                            href="/sign-up"
                            asChild
                        >
                            <Button variant="outline">
                                <ButtonText>Sign Up</ButtonText>
                            </Button>
                        </Link>
                    </VStack>
                </Card>
            </Box>
        </Box>
    );
}
