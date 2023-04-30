import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'ddeec3edc28bd96121c0',
      clientSecret: '5d2a92ea46857e164bef784222b957afe6eed953',
    }),
  ],
  secret : '아힝흥헹힝'
};
export default NextAuth(authOptions); 