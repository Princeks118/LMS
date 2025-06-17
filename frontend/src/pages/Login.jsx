import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function Login() {
  const [LoginInput, setLoginInput] = useState({ email: "", password: "" });
  const [SignupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...SignupInput, [name]: value });
    } else {
      setLoginInput({ ...LoginInput, [name]: value });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", LoginInput);
    // Add your backend API call here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Submitted:", SignupInput);
    // Add your backend API call here
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0d0d0d] relative overflow-hidden">
      {/* Glowing animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-700 rounded-full filter blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-red-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0000] to-black opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-md backdrop-blur-lg bg-[#0f0f0f]/60 rounded-3xl shadow-[0_0_60px_#ff000033] border border-red-700 p-6">
        <Tabs defaultValue="Login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#111111c9] border border-red-600 text-red-400 font-bold rounded-xl shadow-md shadow-red-500/30 backdrop-blur-md">
            <TabsTrigger
              value="Login"
              className="rounded-l-xl text-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="Signup"
              className="rounded-r-xl text-lg data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all"
            >
              Signup
            </TabsTrigger>
          </TabsList>

          {/* Login */}
          <TabsContent value="Login">
            <form onSubmit={handleLoginSubmit}>
              <Card className="bg-[#101010e6] border border-red-700 text-white shadow-lg shadow-red-600/40 mt-6 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-extrabold text-white tracking-wide">
                    Login
                  </CardTitle>
                  <CardDescription className="text-sm text-red-300 font-semibold">
                    Enter your credentials below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="font-bold text-white">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={LoginInput.email}
                      onChange={(e) => changeInputHandler(e, "login")}
                      className="bg-black/70 border border-red-600 text-white font-semibold placeholder-red-300 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="font-bold text-white">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={LoginInput.password}
                      onChange={(e) => changeInputHandler(e, "login")}
                      className="bg-black/70 border border-red-600 text-white font-semibold placeholder-red-300 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-500 text-white text-lg font-bold shadow-lg shadow-red-600/30 transition duration-300"
                  >
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          {/* Signup */}
          <TabsContent value="Signup">
            <form onSubmit={handleSignupSubmit}>
              <Card className="bg-[#101010e6] border border-red-700 text-white shadow-lg shadow-red-600/40 mt-6 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-extrabold text-white tracking-wide">
                    Signup
                  </CardTitle>
                  <CardDescription className="text-sm text-red-300 font-semibold">
                    Create your new account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="font-bold text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={SignupInput.name}
                      onChange={(e) => changeInputHandler(e, "signup")}
                      className="bg-black/70 border border-red-600 text-white font-semibold placeholder-red-300 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-email" className="font-bold text-white">
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      value={SignupInput.email}
                      onChange={(e) => changeInputHandler(e, "signup")}
                      className="bg-black/70 border border-red-600 text-white font-semibold placeholder-red-300 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-password" className="font-bold text-white">
                      Password
                    </Label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      value={SignupInput.password}
                      onChange={(e) => changeInputHandler(e, "signup")}
                      className="bg-black/70 border border-red-600 text-white font-semibold placeholder-red-300 focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-500 text-white text-lg font-bold shadow-lg shadow-red-600/30 transition duration-300"
                  >
                    Signup
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
