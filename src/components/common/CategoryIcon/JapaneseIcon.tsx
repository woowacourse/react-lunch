const JapaneseIcon = () => {
  return (
    <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-label="일식"
    >
      <mask
        id="mask0_3339_1484"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={36}
        height={36}
      >
        <rect width={36} height={36} fill="url(#pattern1)" />
      </mask>
      <g mask="url(#mask0_3339_1484)">
        <rect x={-2} y={-2} width={39} height={39} fill="white" />
      </g>
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_3339_1484" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_3339_1484"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFdUlEQVR4nO2cW4hWVRTHf1bTzGhqU6M5aVFUhGmXh+qhegga6KHEwoSimArMClIneggjoovSQBTRU9EFujyURBciIiYJMivErKwkiq5alqSVmsNMM7Njw/+DQeY7l+/cz6wfLBj0O2ef8z9n773W2msfMAzDMAzDMAzDMAzDMAzDMAzDMKKwCLgi0i+NVFkAPAWMAruB6eme3mjGccAAMAS4Cdbf9AgjFfwbfjfw12HCN8x6QUa0ASuB35oIb70gI6YBy4FvIwhvvSBleoGtMYS3XpASFwAbWxS+YR+mdTFTiTOBDcB4AuH3aJJuL/pmqsR8+fL/JRB+r4TvLPpmqsRMibY/gfAHFA8cW/TNVImj5VLuSSD8sHrNCdQkuLkIWA08D3wE7FBQMyT7FfgK2AQ8C9wOnC//PCpHASuAnQmEHwGe1LBVafwktQR4ATiYQJBDmjiXSOAgl3J7gnbG1M4ZVJxOjbt7E7p5bhLbpZ4xsVdcCnyS4JzeI3odWEwNuCFh93cR7RvgFuCdhOcZBC6kBnQAT+cgvEvJfI+5jJowF/i0BKK6CPaF5pLa0CmPxpXcfpRbeiQ1yyK+UQJxXYD9orkiyHuqLCtiijGqBNb9wDJgITBH7mq7/l6o/3sA2KxjWhHeB2B3am6qJR0RFy6cfrdWArcyv9wToy2nB3wMNefGiIHNo8CMFNrz53hM5wxrdylTgLcjhPPXZtDudREymq8yBWi2YN2wdSHHzwbWA18qTXFQf/t/mxVy7PqQtn0EnjX+Gm9WbqsQwoYBX0sTxGcBx24LOfakCO1ngXdhLwdeAv6d8LALWZgJE6An5PhtAcf6oK5MD8DniB5RtnaytrzXljtRPJGwLrxO2csDMh+lPhRhCHo4hwcwVwVYQS9Kw3wslDthF+UnyqszaPf6iMuKrbrWvjzlrZhLl97h6CZnolzYmN7ojhTa83794xHdUBczmr9YK19hjkWQ3UHOxLm4n4BV8nziMg+4VytncdoM41TgPuC7BKJPtC3kTCsXOaT8/V1KBXsRuvQWtmvcPQu4BngQ+DjGGx/lAcxW+uSDhGUpzVbtesr+AFyO1uAILVUmXRZtZr6qbg1wfF7Cz1LXdSW3c5UGiTt0RbEflCw8nRyZoSf9RwnEdQXYP+pFvRoycy0nWZPRm+RKbmNKn68sIrvaKGyKkwaui+1QIHlK3qJPFH5XCYRwOdo+xQKXUBC+zqYP+L4EYricbFhR73K9eIUKn1ZAUgX7WoVjPu4onE0lEMTlYDuVxPNrzqWivwTiuIxsKGJNaeF1PXE8nf1KE7gSu47vAzdpb0Al6G+hVt6VzH7WJorTqCAdAW7niIQ/8bBjXAns76Ki0zx6QaNWvtkbVZToo6po7qvbNxsavWBcwvvdhEEU5TrOo8ZcCZwd8bd5iL5bGc1zYtzDeVo5qzVtGbuOL+u7PFFdxzlKGE4sdantB4sGMkpJb5WI3TFqdHo1XA5Pcr7asEDCfJ5RdDoQc1Nc4yX4PeTclWaWvIzBjNZON8R0HbuUoY3zUY3K0iOR0nYd31VNz/QY88xSFT2NxGzPl5dUmi0pu47zW/Bikuxwf42KsyrnhY2uFoaYoN7mF+QrTXfMbj+sjc5XxVjYaEswxATZE9SENzNa2FgU0Ytpxd6r0zd8loW4jr6CjQSBkkvZNqe0Fao0+KHkzwQLG2GBkkvRXqzrR5RWaxvOzJy9GBfR/J6C2zK8/0rSq40WWQo/rp51ctE3W1b88HNrzO9wugjmh7JX6vJ1kzyYpnjgOdVWJqlUW1uXT4cV2SsWqz7/GS2cb9ci0CFtCdqnXjMof76vqPJAwzAMwzAMwzAMwzAMwzAMwzAMYvI/nThSBfxGl+QAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default JapaneseIcon;
