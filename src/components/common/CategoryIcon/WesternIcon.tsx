const WesternIcon = () => {
  return (
    <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-label="양식"
    >
      <mask
        id="mask0_3339_1480"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={36}
        height={36}
      >
        <rect width={36} height={36} fill="url(#pattern2)" />
      </mask>
      <g mask="url(#mask0_3339_1480)">
        <rect x={-2} y={-1} width={39} height={39} fill="white" />
      </g>
      <defs>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_3339_1480" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_3339_1480"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFiklEQVR4nO2dW6hVRRjHf5blya6cLlSW+lChXUgOBRHdrSzMkqS0OCVFhNBDEdVDEPgYFFERRRhENyqIkkqsjKighwSNSqmQbpAWR62sB9vHrRMD34LNYe+1ZtZee803a88PPjgPe8+e9f+vmTXzzaw5kEgkEolEIpFIJBLNZRrwqESiZqYDLwBGIplQI4cD6zrETybUyCjwRRfxkwk1MAf4Lkf8ZMIAORv4zUH8LMYHWZlh4wJgl4f4HwIjoSvdJN7xEH99Et+Pk4CFwBk5nxkRYZP4FTIDWAPs7xB2M3BWSRPSne/Jcz2E3A2MeZrgI/4xvhVtIicA+3LuZh8TfMRfDfwEnMqQc6lDf+5igq/4WdnbgJMZYs50HNEUmVBG/Cy+B05kiNlUgQllxc9iC3A8Q8p8EXeQJuSJn8XXwLEMKWMDNMFF/CweoaGMyIinbhN8xH8ZOIiGcTrwHtCSi7QZzMU1mXAasNexrNeAg2lgyniiy8XaGe+dNZlwjYMJb8qqWuNYk3PRWkx4q6niI+Nro9iEtcAhNJitDsIdAFbllLHAI///F3B+TllXd5iwXpKAOD7Io1zof9xRuLpbwtue4mdl27+jWzTfptAEV7oNYaMzYTbwo6NwdXZH/cwfouuOZkdmgsvkTaUJN0kf2425wM8RdEc+M+fbUcS9Ipyd8S6JtCWs9hB/I3AECpghOZTOyu2NsCWMe4hv5zfHoQCbuv20RyVbkbWEQyVnVVTGdrmJVCTZfiiobKthJvwtvxWcMY8LbjXEBNutXowCLpQ7wbW/NBE+E6butmgDS1GSXt7pKb6JvCXY37sLBRwmu9VMH/FqTvlaW8JylPBYn+I/5bDcp7ElqMDu0ZwsKXwbuMfjt5IJXXDZjdwt/sl5+BJZdxSMc6S5+4q/vc+LSS1BeLGE+HaD0yyPNYOlylqCfXbMQ0meZ0+JbsdH/E3ynBhXZsJHKGBJibv/eU/xTcfDerkiE2x9ZhKYZ0oY8EAJ8Y2EfU/gRkUmHEVgviw53i8jvumYMV+vwIRvCIzdrPRfCQMmcl79GXXcim5/99qaTNjV43uLCMysEuJn8UkXE04BvqogeVe1CfPkgduWz3+rQXzLeX0YkLWEp4GHZIvivxWJPwgTkAfukSjiyj4NMCXCVfxBmaCKhTWL3wKuCzxjVsVliu/8oWgJl0QiflkTVqCci2oy4FaPOtmR1QcVLW/aLu8KFHN5DeJv9uzrtzi0Gh8T/tD8fvCKGgx41rEu50p627Xr8jHhfZRyXw0GvOJQj6tyMrJVmdAr9RGUzmMgBxU7C/ZXrnRYCi0y4ReHemzV+Hqqa9qg33i9y0ty0+SFadeVuDwT5jvuY7oBRYwWHCFTdWyUBRmb/lgGbChRRp4Ji6YcBtUt7B4gNdxWo/imwsgz4aWC705qOidirQIxTYnIS2PPcUiv29YXnLkdqdmYYtJhNPNun4tJtfCEAjGNZ+xzvHtXFZTzMQruftfDLbRE2yOvs6CgLDtvCMobCgQ1HrFfBgw+55LmlWeHq8FYFuGdv9LzGqc7lBkEm+j6U4GoxuOBW3bbeFHZtXO0bCU0kcSE5IdoigFldz6HiM9ldwVNMqDzCBetsVteBK/iSDF1BiBnuGVnummKHcDDFZ/xrNIAZBapwYQ9Mhy+2eNMn0YYgOzTL/sqUq9h3Q7ZjrhhSthZ52eSjn4SuFu2Cg76CDHVBiC7k/t5H8xuS7xfFvVnog/1BmTHzvisB/wKPBjJ2csmBgOQiU5RVvR34I7Ijn00sRhguaWHCQckdRv8BYamG4AsFbanzETzjh7WjonNACTd25Z/+WGPqYkZE6MB2eio6PTzGDCxGtAUTDIgLMmAwCQDApMMCEwyIDDJgMAkAxgiA/4HGLk9bmn76mcAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default WesternIcon;
