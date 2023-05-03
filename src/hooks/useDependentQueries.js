import { useQuery } from "react-query";

const getUserData = async (email) => {
  const result = await fetch(`http://localhost:4000/emails/${email}`);
  return result.json();
};

const getChannelData = async (channelId) => {
  const result = await fetch(`http://localhost:4000/channels/${channelId}`);
  return result.json();
};

const useDependentQueries = (email) => {
  const { data: user } = useQuery(["user-data", email], () =>
    getUserData(email)
  );

  const channelId = user?.channelId;


  const { data: channelDetails } = useQuery(
    ["channel-details", user?.channelId],
    () => getChannelData(channelId),
    {
      enabled: !!channelId,
    }
  );
  return channelDetails;
};

export default useDependentQueries;
