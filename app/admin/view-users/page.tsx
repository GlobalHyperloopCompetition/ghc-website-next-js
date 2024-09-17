"use client";

import React from "react";
import { useQuery } from "react-query";

interface User {
  id: string;
  profilePictureUrl?: string;
  email: string;
  uid: string;
  name: string;
  emailVerified: boolean;
  phone?: string;
  country?: string;
  category?: string[];
  homeUniversity?: string;
  teamname?: string;
  activemembers?: string;
  postalcode?: string;
  attendeventmembers?: string;
}

const AdminViewUsers = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  // Fetch users with react-query
  const { data, error, isLoading } = useQuery("users", async () => {
    const response = await fetch("/api/user/getAll",{
      method: "GET",
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data: User[] = await response.json();
    return data;
  });

  React.useEffect(() => {
    if (data && !isLoading && !error) {
      // Sort users: fully filled users will come first
      const sortedUsers = data.sort((a: User, b: User) => {
        const aFullyFilled = isFullyFilled(a);
        const bFullyFilled = isFullyFilled(b);

        // Sort fully filled users before less filled users
        return (bFullyFilled ? 1 : 0) - (aFullyFilled ? 1 : 0);
      });

      setUsers(sortedUsers);
    }
  }, [data, isLoading, error]);

  // Function to check if the user is "fully filled"
  function isFullyFilled(user: User) {
    // Define a set of keys that indicate a fully filled user
    const fullyFilledKeys = [
      "phone",
      "country",
      "category",
      "homeUniversity",
      "teamname",
      "activemembers",
      "postalcode",
      "attendeventmembers",
    ];

    // Check if all fully filled keys are present and non-empty in the user object
    return fullyFilledKeys.every(
      (key) => key in user && user[key as keyof User]
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Sl
                </th>
                <th scope="col" className="px-3 py-3">
                  Image
                </th>
                <th scope="col" className="px-3 py-3">
                  Team
                </th>
                <th scope="col" className="px-3 py-3">
                  University
                </th>
                <th scope="col" className="px-3 py-3">
                  Team Rep
                </th>
                <th scope="col" className="px-3 py-3">
                  Members
                </th>
                <th scope="col" className="px-3 py-3">
                  Country
                </th>
                <th scope="col" className="px-3 py-3">
                  Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Phone
                </th>
                <th scope="col" className="px-3 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any, index) => (
                <tr key={user.id} className="text-white dark:border-gray-700 ">
                  <td className="px-3 py-4">{index + 1}</td>
                  <td className="px-3 py-4">
                    <img
                      src={user.profilePictureUrl}
                      alt={user.name}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td className=" px-3 py-4">{user.teamname}</td>
                  <td className=" px-3 py-4">{user.homeUniversity}</td>
                  <td className=" px-3 py-4">{user.teamrepresentetive}</td>
                  <td className=" px-3 py-4">{user.attendeventmembers}</td>
                  <td className=" px-3 py-4">{user.country}</td>
                  <td className="px-3 py-4">{user.name}</td>
                  <td className=" px-3 py-4">{user.phone}</td>
                  <td className=" px-3 py-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminViewUsers;
