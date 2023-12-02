class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        st = ""
        for s in strs:
            st += str(len(s)) + ";" + s
        return st


    """
    @param: str: A string
    @return: decodes a single string to a list of strings
    """
    def decode(self, str):
        res = []
        i = 0
        while (i<len(str)):
            j = i
            while(str[j]!=";"):
                j+=1
            length = int(str[i:j])
            res.append(str[j+1:j+1+length])
            i = j+1+length
        return res

x  = Solution()
en = x.encode(["3;4;4lint","coddhe4;uhdeuhdede","love","you","you;;;;;"])
print(en)
de = x.decode(en)
print(de)