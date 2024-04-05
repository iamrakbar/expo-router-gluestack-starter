import { Link, router } from 'expo-router';

import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';

import { useSession } from '@/utils/ctx';
import { Card } from '@/components/ui/card';
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { Divider } from '@/components/ui/divider';

export default function SignUp() {
    const { signIn } = useSession();
    return (
        <Box className='flex flex-1 justify-center'>
            <Box className='w-full max-w-md mx-auto px-4'>
                <Card size="lg" variant='outline'>
                    <VStack space="lg">
                        <Heading size="xl">
                            Sign Up
                        </Heading>
                        <FormControl>
                            <FormControlLabel className="mb-1">
                                <FormControlLabelText>Full Name</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField type="text" placeholder="Your Full Name" />
                            </Input>
                        </FormControl>
                        <FormControl>
                            <FormControlLabel className="mb-1">
                                <FormControlLabelText>Email</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField type="text" placeholder="email@domain.com" />
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
                        <FormControl>
                            <FormControlLabel className="mb-1">
                                <FormControlLabelText>Repeat Password</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField type="password" placeholder="" />
                            </Input>
                        </FormControl>
                        <Button
                            disabled
                            className='mt-4'
                        >
                            <ButtonText>
                                Sign Up
                            </ButtonText>
                        </Button>
                        <Divider />
                        <Text>Have an account?</Text>
                        <Link
                            suppressHighlighting
                            href="/sign-in"
                            asChild
                        >
                            <Button variant="outline">
                                <ButtonText>Sign In</ButtonText>
                            </Button>
                        </Link>
                    </VStack>
                </Card>
            </Box>
        </Box>
    );
}
