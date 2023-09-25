"use client";

import {useMutation} from "@tanstack/react-query";

const asyncCall = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("reject"), 1000)
  );
};

export default function TestMutation() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      console.log("CALLED ADD TODO");
      const data = fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          userId: "userId",
          initialImage: "initialImage",
          prompt: "prompt",
          artisticStyle: "artisticStyle",
          size: "size",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    },
  });

  console.log(mutation);

  return (
    <div>
      {mutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({id: new Date(), title: "Do Laundry"});
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  );
}
