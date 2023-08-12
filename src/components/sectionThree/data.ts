export interface SkillData {
  skill: string;
  paths: string[];
}

const paths: SkillData[] = [
  {
    skill: "Prisma",
    paths: [
      "M52.6582 165.183C50.7411 162.159 50.7122 158.307 52.5835 155.254L123.044 40.3196C126.963 33.927 136.426 34.4859 139.565 41.2954L203.934 180.926C206.322 186.107 203.573 192.203 198.108 193.843L97.9779 223.882C93.9492 225.09 89.6084 223.471 87.3564 219.918L52.6582 165.183ZM131.173 73.9256C131.852 70.5445 136.485 70.0569 137.853 73.2226L182.254 175.963C183.09 177.898 182.05 180.129 180.03 180.731L110.848 201.383C108.305 202.142 105.869 199.92 106.392 197.318L131.173 73.9256Z",
    ],
  },
  {
    skill: "React",
    paths: [
      "M89.8372 33C84.4401 33 79.4343 34.2011 75 36.7389C61.1416 44.693 55.8667 64.0764 58.6618 88.2094C36.2455 97.8697 22 112.094 22 128C22 143.906 36.2455 158.13 58.6618 167.791C55.8681 191.923 61.1416 211.307 75 219.261C79.4255 221.799 84.4312 223 89.8372 223C101.344 223 114.643 217.259 128 207.41C141.358 217.259 154.673 223 166.18 223C171.577 223 176.583 221.799 181.017 219.261C194.876 211.307 200.15 191.923 197.355 167.791C219.763 158.13 234 143.903 234 128C234 112.094 219.754 97.8697 197.338 88.2094C200.132 64.0774 194.858 44.693 181 36.7389C176.575 34.1923 171.569 33 166.163 33C154.656 33 141.357 38.741 128 48.5904C114.642 38.741 101.34 33 89.8372 33ZM89.8372 48.3674C96.7417 48.3674 105.872 52.017 115.785 58.7781C109.957 64.2461 104.249 70.4639 98.7568 77.3871C89.8495 78.6568 81.4514 80.5076 73.6715 82.824C73.6298 82.2876 73.5308 81.7248 73.499 81.1946C72.5539 65.5638 76.007 53.912 82.7292 50.0482C84.7167 48.9066 87.0371 48.3674 89.8372 48.3674ZM166.163 48.3674C168.954 48.3674 171.283 48.9066 173.271 50.0482C179.993 53.9032 183.446 65.5638 182.501 81.1946C182.469 81.7248 182.37 82.2876 182.328 82.824C174.544 80.5062 166.139 78.6568 157.226 77.3871C151.734 70.4648 146.043 64.2455 140.215 58.7781C150.127 52.0181 159.262 48.3674 166.163 48.3674ZM128 68.5371C130.395 70.7038 132.772 72.9938 135.177 75.5005C132.794 75.4209 130.424 75.3118 128 75.3118C125.582 75.3118 123.218 75.4212 120.84 75.5005C123.243 72.9964 125.608 70.7017 128 68.5371ZM128 90.6792C135.32 90.6792 142.258 91.0859 148.841 91.794C152.856 97.2186 156.812 102.954 160.521 109.34C164.076 115.46 167.219 121.726 169.993 128C167.219 134.278 164.078 140.553 160.521 146.678C156.824 153.045 152.877 158.743 148.876 164.155C142.06 164.896 135.069 165.321 128 165.321C120.68 165.321 113.742 164.914 107.159 164.206C103.144 158.781 99.1877 153.063 95.4788 146.678C91.9219 140.553 88.7817 134.278 86.0072 128C88.7797 121.726 91.924 115.46 95.4788 109.34C99.1776 102.972 103.122 97.2569 107.124 91.8455C113.94 91.1041 120.931 90.6792 128 90.6792ZM169.924 95.43C173.428 96.2712 176.798 97.1792 179.965 98.1914C179.247 101.415 178.37 104.7 177.377 108.019C176.24 105.899 175.138 103.771 173.909 101.656C172.645 99.4798 171.241 97.5248 169.924 95.43ZM86.0589 95.4472C84.7459 97.5355 83.3511 99.4868 82.0908 101.656C80.8624 103.772 79.7594 105.898 78.623 108.019C77.628 104.693 76.7362 101.404 76.0179 98.1742C79.2433 97.1611 82.604 96.264 86.0589 95.4472ZM61.474 103.817C63.3351 111.629 65.9169 119.727 69.2376 127.983C65.924 136.219 63.353 144.302 61.4912 152.097C46.1082 144.713 37.4583 135.52 37.4583 128C37.4583 120.281 45.8666 111.485 59.9557 104.486C60.4366 104.247 60.9826 104.05 61.474 103.817ZM194.509 103.903C209.892 111.287 218.542 120.48 218.542 128C218.542 135.719 210.133 144.515 196.044 151.514C195.563 151.753 195.017 151.949 194.526 152.183C192.664 144.366 190.103 136.261 186.78 128C190.089 119.771 192.649 111.691 194.509 103.903ZM128 110.437C118.239 110.437 110.333 118.297 110.333 128C110.333 137.703 118.239 145.563 128 145.563C137.761 145.563 145.667 137.703 145.667 128C145.667 118.297 137.761 110.437 128 110.437ZM78.623 147.981C79.7601 150.102 80.8788 152.228 82.1081 154.344C83.371 156.519 84.7601 158.477 86.0762 160.57C82.5716 159.729 79.2024 158.821 76.0352 157.809C76.7533 154.583 77.6294 151.303 78.623 147.981ZM177.377 147.998C178.371 151.321 179.264 154.599 179.982 157.826C176.757 158.839 173.396 159.736 169.941 160.553C171.254 158.465 172.649 156.513 173.909 154.344C175.135 152.233 176.243 150.115 177.377 147.998ZM73.6715 173.176C81.4563 175.494 89.8606 177.343 98.7741 178.613C104.267 185.539 109.954 191.77 115.785 197.239C105.873 203.998 96.7412 207.65 89.8372 207.65C87.0459 207.65 84.7167 207.093 82.7292 205.952C76.007 202.097 72.5539 190.453 73.499 174.823C73.5314 174.287 73.629 173.718 73.6715 173.176ZM182.328 173.176C182.371 173.718 182.469 174.287 182.501 174.823C183.446 190.453 179.993 202.088 173.271 205.952C171.283 207.093 168.963 207.65 166.163 207.65C159.259 207.65 150.127 203.999 140.215 197.239C146.046 191.769 151.749 185.54 157.243 178.613C166.15 177.343 174.549 175.492 182.328 173.176ZM120.823 180.5C123.206 180.579 125.576 180.688 128 180.688C130.424 180.688 132.794 180.579 135.177 180.5C132.772 183.006 130.395 185.296 128 187.463C125.605 185.296 123.228 183.006 120.823 180.5Z",
    ],
  },
  {
    skill: "NextJs",
    paths: [
      "M121.451 28.0537C121.021 28.0928 119.652 28.2297 118.42 28.3274C90.0137 30.8885 63.4057 46.216 46.5533 69.7742C37.1691 82.8729 31.1672 97.7312 28.8993 113.469C28.0978 118.963 28 120.586 28 128.034C28 135.483 28.0978 137.106 28.8993 142.599C34.3343 180.155 61.0596 211.71 97.306 223.401C103.797 225.493 110.639 226.92 118.42 227.78C121.451 228.112 134.549 228.112 137.58 227.78C151.011 226.294 162.389 222.971 173.611 217.242C175.331 216.363 175.664 216.128 175.429 215.933C175.273 215.815 167.941 205.981 159.144 194.095L143.152 172.492L123.112 142.834C112.086 126.529 103.015 113.195 102.936 113.195C102.858 113.176 102.78 126.353 102.741 142.443C102.682 170.615 102.663 171.749 102.311 172.413C101.803 173.371 101.412 173.762 100.59 174.193C99.9648 174.505 99.4174 174.564 96.4653 174.564H93.0831L92.1838 173.997C91.5973 173.626 91.1672 173.137 90.8739 172.57L90.4633 171.69L90.5611 93.2737L91.1672 92.5112C91.48 92.1007 92.1447 91.5728 92.6139 91.3186C93.4154 90.9276 93.7283 90.8885 97.1105 90.8885C101.099 90.8885 101.763 91.0449 102.8 92.1789C103.093 92.4917 113.943 108.836 126.925 128.523C139.906 148.21 157.658 175.092 166.377 188.288L182.213 212.277L183.015 211.749C190.111 207.135 197.619 200.566 203.562 193.723C216.211 179.197 224.364 161.485 227.101 142.599C227.902 137.106 228 135.483 228 128.034C228 120.586 227.902 118.963 227.101 113.469C221.666 75.913 194.94 44.3587 158.694 32.6676C152.301 30.5953 145.498 29.1681 137.873 28.3079C135.996 28.1124 123.073 27.8973 121.451 28.0537ZM162.389 88.5425C163.327 89.0117 164.09 89.911 164.364 90.8494C164.52 91.3577 164.559 102.228 164.52 126.724L164.461 161.876L158.264 152.374L152.047 142.873V117.321C152.047 100.801 152.125 91.5141 152.242 91.0645C152.555 89.9697 153.239 89.1095 154.178 88.6011C154.979 88.1906 155.273 88.1515 158.342 88.1515C161.236 88.1515 161.744 88.1906 162.389 88.5425Z",
    ],
  },
  {
    skill: "Css3",
    paths: [
      "M208 38L202.233 102.651L201.454 111.229L193.468 200.718L128.095 218.836V218.841L127.948 218.882L62.5175 200.718L58.0425 150.564H90.1072L92.3813 176.04L127.955 185.645L127.985 185.637V185.635L163.61 176.019L167.318 134.593H56.6155L53.7527 102.651H170.088L172.994 69.9423H50.9036L48 38H208Z",
    ],
  },
  {
    skill: "HTML5",
    paths: [
      "M48 38L56.6098 134.593H167.32L163.605 176.023L128 185.65V185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5235 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.139L208 38H48Z",
    ],
  },
  {
    skill: "NodeJs",
    paths: [
      "M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z",
      "M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1197 141.372 89.3351Z",
    ],
  },
  {
    skill: "JavaScript",
    paths: [
      "M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93",
      "M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354Z",
    ],
  },
  {
    skill: "TypeScript",
    paths: [
      "M56.6112 128.849L56.5299 139.333H89.8505V234.012H113.419V139.333H146.739V129.052C146.739 123.363 146.618 118.609 146.455 118.487C146.333 118.325 126.056 118.243 101.472 118.284L56.7331 118.406L56.6112 128.849Z",
      "M206.567 118.108C213.068 119.734 218.026 122.619 222.577 127.332C224.934 129.852 228.428 134.444 228.713 135.541C228.794 135.866 217.66 143.343 210.915 147.528C210.671 147.691 209.695 146.634 208.598 145.009C205.307 140.214 201.853 138.141 196.57 137.776C188.809 137.247 183.811 141.311 183.852 148.097C183.852 150.088 184.136 151.266 184.949 152.892C186.655 156.427 189.825 158.54 199.781 162.847C218.107 170.731 225.949 175.932 230.826 183.327C236.271 191.576 237.49 204.742 233.792 214.535C229.729 225.181 219.651 232.414 205.469 234.812C201.081 235.584 190.678 235.462 185.965 234.609C175.684 232.78 165.932 227.701 159.918 221.037C157.561 218.436 152.969 211.65 153.254 211.162C153.375 211 154.432 210.35 155.61 209.659C156.748 209.009 161.056 206.53 165.119 204.173L172.474 199.906L174.018 202.182C176.172 205.473 180.885 209.984 183.73 211.487C191.897 215.795 203.113 215.185 208.639 210.228C210.996 208.074 211.971 205.839 211.971 202.548C211.971 199.581 211.605 198.281 210.061 196.046C208.07 193.202 204.007 190.804 192.466 185.806C179.26 180.117 173.571 176.582 168.37 170.974C165.363 167.724 162.518 162.522 161.34 158.174C160.365 154.558 160.121 145.496 160.893 141.839C163.615 129.08 173.246 120.181 187.143 117.539C191.654 116.686 202.137 117.011 206.567 118.108Z",
    ],
  },
  {
    skill: "NestJs",
    paths: [
      "M146.351 25C144.898 25 143.548 25.3204 142.302 25.7477C144.95 27.5637 146.403 29.967 147.13 32.6909C147.182 33.0648 147.286 33.3319 147.337 33.7057C147.389 34.0262 147.442 34.3466 147.442 34.6671C147.649 39.3671 146.247 39.9546 145.261 42.7318C143.756 46.3103 144.171 50.1558 145.988 53.2535C146.144 53.6273 146.351 54.0546 146.61 54.4285C144.638 40.9159 155.591 38.8864 157.615 34.6671C157.771 30.9819 154.812 28.525 152.476 26.8159C150.244 25.4273 148.22 25 146.351 25ZM162.858 28.0443C162.65 29.2727 162.806 28.9523 162.755 29.5932C162.702 30.0205 162.702 30.5546 162.65 30.9819C162.546 31.4091 162.443 31.8364 162.287 32.2637C162.183 32.6909 162.027 33.1182 161.872 33.5454C161.664 33.9728 161.509 34.3466 161.301 34.7739C161.146 34.9876 161.041 35.2011 160.886 35.4148C160.782 35.575 160.678 35.7352 160.574 35.8955C160.314 36.2694 160.055 36.6432 159.795 36.9636C159.484 37.2842 159.225 37.658 158.861 37.9251C158.861 37.9786 158.861 37.9786 158.861 37.9786C158.549 38.2456 158.238 38.566 157.875 38.8331C156.785 39.6876 155.539 40.3286 154.397 41.1297C154.034 41.3967 153.671 41.6103 153.359 41.9308C152.995 42.1978 152.685 42.4649 152.373 42.7854C152.009 43.1058 151.75 43.4262 151.439 43.8001C151.179 44.1206 150.867 44.4944 150.66 44.8683C150.4 45.2422 150.141 45.616 149.933 45.9899C149.725 46.4172 149.57 46.7911 149.362 47.2183C149.207 47.6456 149.051 48.0195 148.947 48.4467C148.791 48.9274 148.687 49.3547 148.584 49.782C148.531 49.9957 148.531 50.2626 148.479 50.4763C148.428 50.69 148.428 50.9036 148.376 51.1172C148.376 51.5445 148.324 52.0251 148.324 52.4524C148.324 52.7729 148.324 53.0933 148.376 53.4138C148.376 53.841 148.428 54.2683 148.531 54.749C148.584 55.1763 148.687 55.6035 148.791 56.0308C148.947 56.4581 149.051 56.8854 149.207 57.3127C149.31 57.5797 149.466 57.8468 149.57 58.0604L137.631 53.3069C135.606 52.7195 133.634 52.1854 131.609 51.7047C130.519 51.4377 129.43 51.1706 128.339 50.9036C125.224 50.2626 122.058 49.782 118.891 49.4616C118.788 49.4616 118.736 49.408 118.632 49.408C115.517 49.0876 112.455 48.9274 109.341 48.9274C107.056 48.9274 104.773 49.0341 102.541 49.1944C99.3742 49.4081 96.2078 49.8353 93.0413 50.3694C92.2627 50.4761 91.484 50.6364 90.7054 50.7967C89.0962 51.1171 87.539 51.491 86.0336 51.8648C85.255 52.0786 84.4765 52.2921 83.6978 52.5058C82.9192 52.8262 82.1924 53.2001 81.4657 53.5205C80.8947 53.7876 80.3237 54.0546 79.7527 54.3217C79.649 54.3751 79.545 54.3751 79.4932 54.4284C78.9741 54.6955 78.5069 54.909 78.0398 55.1762C77.8841 55.2297 77.7802 55.2828 77.6764 55.3364C77.1054 55.6035 76.5344 55.9239 76.0673 56.1909C75.7039 56.3511 75.3405 56.5648 75.0291 56.725C74.8734 56.8318 74.6657 56.9387 74.5619 56.9921C74.0947 57.2591 73.6276 57.5262 73.2123 57.7932C72.7451 58.0603 72.3298 58.3272 71.9664 58.5943C71.6031 58.8614 71.2398 59.075 70.9283 59.3421C70.8763 59.3955 70.8246 59.3955 70.7726 59.4488C70.4611 59.6625 70.0977 59.9295 69.7863 60.1965C69.7863 60.1965 69.7343 60.25 69.6826 60.3032C69.4231 60.517 69.1634 60.7305 68.9039 60.9442C68.8002 60.9977 68.6962 61.1044 68.5925 61.1579C68.3329 61.3716 68.0734 61.6386 67.8139 61.8522C67.7619 61.9589 67.6581 62.0125 67.6062 62.066C67.2947 62.3864 66.9833 62.6534 66.6718 62.9739C66.6198 62.9739 66.6198 63.0274 66.5681 63.0806C66.2566 63.3476 65.9451 63.6682 65.6337 63.9886C65.5817 64.0421 65.5817 64.0953 65.5299 64.0953C65.2704 64.3624 65.0109 64.6294 64.7513 64.9499C64.6476 65.0566 64.4918 65.1636 64.388 65.2703C64.1284 65.5908 63.817 65.9112 63.5055 66.2317C63.4535 66.3384 63.3498 66.392 63.2978 66.4987C62.8825 66.9261 62.5191 67.3533 62.1039 67.7806C62.0519 67.834 62.0002 67.8873 61.9482 67.9408C61.1176 68.8488 60.2352 69.7567 59.3008 70.5578C58.3665 71.4124 57.3803 72.2135 56.394 72.9078C55.3558 73.6556 54.3695 74.2965 53.2795 74.9374C52.2412 75.5249 51.1512 76.059 50.0092 76.5397C48.9191 77.0203 47.7771 77.4477 46.6352 77.8215C44.455 78.3022 42.223 79.2101 40.3023 79.3703C39.887 79.3703 39.4199 79.4771 39.0046 79.5305C38.5374 79.6373 38.1221 79.7443 37.7069 79.8511C37.2916 80.0113 36.8763 80.1715 36.4611 80.3317C36.0458 80.492 35.6306 80.7056 35.2153 80.9193C34.8519 81.1863 34.4367 81.3999 34.0733 81.6669C33.7099 81.934 33.3466 82.2544 33.0351 82.5749C32.6718 82.842 32.3084 83.2159 31.997 83.5363C31.6855 83.9102 31.3741 84.2306 31.1145 84.6045C30.855 85.0318 30.5436 85.4057 30.3359 85.8329C30.0763 86.2068 29.8168 86.634 29.6092 87.0612C29.4014 87.542 29.1939 87.9692 29.0381 88.45C28.8824 88.8772 28.7267 89.3579 28.571 89.8386C28.4672 90.2659 28.3633 90.6931 28.3115 91.1204C28.3115 91.1739 28.2594 91.2271 28.2594 91.2806C28.1557 91.7613 28.1557 92.4023 28.1038 92.7227C28.0517 93.0966 28 93.417 28 93.7909C28 94.0047 28 94.2715 28.052 94.4852C28.1039 94.8591 28.1557 95.1795 28.2597 95.5C28.3635 95.8205 28.4674 96.1409 28.623 96.4614C28.623 96.5149 28.623 96.5149 28.623 96.5149C28.7788 96.8353 28.9864 97.1557 29.1941 97.4762C29.4018 97.7967 29.6093 98.1171 29.8688 98.4376C30.1284 98.7046 30.4399 99.0251 30.7514 99.2921C31.0627 99.6125 31.3743 99.8796 31.7375 100.147C32.9834 101.268 33.2948 101.642 34.904 102.496C35.1635 102.657 35.4231 102.764 35.7345 102.924C35.7865 102.924 35.8383 102.978 35.8903 102.978C35.8903 103.084 35.8903 103.138 35.9422 103.244C35.9942 103.671 36.098 104.099 36.2018 104.526C36.3055 105.007 36.4614 105.435 36.6171 105.808C36.7728 106.128 36.8766 106.449 37.0324 106.77C37.0844 106.877 37.1361 106.983 37.188 107.037C37.3958 107.464 37.6033 107.837 37.811 108.212C38.0705 108.585 38.33 108.959 38.5896 109.334C38.8492 109.654 39.1606 110.027 39.4721 110.348C39.7835 110.669 40.095 110.936 40.4583 111.256C40.4583 111.256 40.5103 111.309 40.562 111.309C40.8735 111.576 41.1849 111.844 41.4964 112.057C41.8598 112.324 42.2231 112.538 42.6384 112.751C43.0017 112.965 43.417 113.178 43.8323 113.339C44.1437 113.499 44.5071 113.606 44.8705 113.713C44.9225 113.766 44.9742 113.766 45.0782 113.82C45.2859 113.873 45.5453 113.926 45.753 113.98C45.5972 116.864 45.5453 119.588 45.9607 120.549C46.4278 121.618 48.7119 118.359 50.9958 114.62C50.6843 118.306 50.4767 122.632 50.9958 123.914C51.5668 125.249 54.6813 121.083 57.3806 116.49C94.1837 107.731 127.768 133.902 131.298 170.861C130.623 165.092 123.72 161.888 120.553 162.689C118.996 166.641 116.348 171.715 112.092 174.866C112.456 171.341 112.3 167.709 111.573 164.185C110.431 169.098 108.199 173.692 105.136 177.643C100.205 178.018 95.2738 175.561 92.6784 171.875C92.4706 171.715 92.4189 171.395 92.2631 171.181C92.1074 170.807 91.9516 170.433 91.8478 170.06C91.6921 169.686 91.5883 169.311 91.5363 168.938C91.4844 168.564 91.4844 168.191 91.4844 167.763C91.4844 167.496 91.4844 167.229 91.4844 166.962C91.5363 166.588 91.6401 166.214 91.7439 165.84C91.8476 165.467 91.9516 165.092 92.1073 164.719C92.315 164.345 92.4706 163.971 92.7302 163.597C93.6127 161.033 93.6127 158.951 92.0035 157.722C91.692 157.509 91.3806 157.348 91.0172 157.188C90.8095 157.134 90.55 157.027 90.3423 156.974C90.1867 156.921 90.0828 156.867 89.9271 156.814C89.5638 156.707 89.2004 156.6 88.837 156.547C88.4737 156.44 88.1103 156.387 87.747 156.387C87.3836 156.333 86.9684 156.28 86.605 156.28C86.3455 156.28 86.0858 156.333 85.8263 156.333C85.4111 156.333 85.0477 156.387 84.6843 156.494C84.321 156.547 83.9577 156.6 83.5943 156.707C83.2309 156.814 82.8675 156.921 82.5042 157.082C82.1409 157.242 81.8294 157.402 81.466 157.562C81.1546 157.722 80.8431 157.936 80.4797 158.096C68.385 166.214 75.6003 185.228 83.8538 190.729C80.7393 191.317 77.5729 192.011 76.6905 192.706C76.6384 192.759 76.5867 192.812 76.5867 192.812C78.8188 194.201 81.1547 195.376 83.5944 196.39C86.9165 197.512 90.4463 198.527 92.0036 198.954V199.007C96.3119 199.916 100.672 200.236 105.085 199.969C128.08 198.313 146.922 180.315 150.349 156.6C150.453 157.082 150.556 157.509 150.66 157.989C150.816 158.951 151.023 159.966 151.128 160.98C151.128 160.98 151.128 160.98 151.128 161.034C151.231 161.514 151.283 161.995 151.335 162.423C151.335 162.529 151.335 162.583 151.335 162.636C151.387 163.116 151.439 163.598 151.439 164.025C151.491 164.612 151.542 165.2 151.542 165.787C151.542 166.054 151.542 166.322 151.542 166.642C151.542 166.909 151.595 167.229 151.595 167.496C151.595 167.817 151.542 168.137 151.542 168.457C151.542 168.724 151.542 168.992 151.542 169.206C151.542 169.579 151.491 169.899 151.491 170.274C151.491 170.488 151.491 170.701 151.439 170.968C151.439 171.341 151.386 171.716 151.386 172.143C151.334 172.303 151.334 172.463 151.334 172.623C151.283 173.051 151.23 173.425 151.179 173.852C151.179 174.012 151.179 174.172 151.127 174.333C151.074 174.867 150.971 175.347 150.919 175.882V175.989C150.816 176.469 150.711 177.004 150.608 177.484C150.608 177.537 150.608 177.591 150.608 177.644C150.504 178.124 150.4 178.606 150.297 179.086C150.297 179.139 150.244 179.246 150.244 179.3C150.141 179.781 150.037 180.261 149.881 180.743C149.881 180.796 149.881 180.848 149.881 180.903C149.725 181.436 149.569 181.917 149.465 182.398C149.414 182.451 149.414 182.505 149.414 182.505C149.258 183.039 149.102 183.572 148.946 184.107C148.739 184.641 148.583 185.122 148.376 185.656C148.168 186.189 148.012 186.724 147.805 187.204C147.597 187.739 147.389 188.219 147.182 188.753H147.13C146.921 189.234 146.714 189.768 146.454 190.249C146.402 190.409 146.351 190.516 146.299 190.623C146.247 190.676 146.247 190.73 146.195 190.783C142.821 197.78 137.838 203.921 131.609 208.729C131.194 208.995 130.778 209.316 130.363 209.637C130.26 209.743 130.104 209.797 130 209.904C129.636 210.171 129.273 210.437 128.858 210.704L129.013 211.025H129.065C129.792 210.919 130.518 210.811 131.246 210.704H131.297C132.647 210.491 133.997 210.224 135.347 209.957C135.71 209.904 136.125 209.797 136.489 209.69C136.748 209.636 136.956 209.583 137.215 209.529C137.579 209.476 137.942 209.369 138.305 209.316C138.616 209.209 138.928 209.156 139.239 209.049C144.431 207.767 149.465 206.005 154.293 203.921C146.04 215.512 134.983 224.858 122.058 231C128.028 230.573 133.997 229.558 139.758 227.849C160.678 221.493 178.275 207.019 188.812 187.525C186.684 199.862 181.908 211.613 174.849 221.867C179.884 218.449 184.504 214.497 188.709 210.01C200.336 197.513 207.966 181.65 210.562 164.613C212.327 173.051 212.846 181.757 212.067 190.355C249.545 136.572 215.182 80.8132 200.804 66.1257C200.751 66.0189 200.7 65.9654 200.7 65.8586C200.648 65.9121 200.648 65.9121 200.648 65.9653C200.648 65.9119 200.648 65.9119 200.595 65.8586C200.595 66.4995 200.543 67.1404 200.492 67.7813C200.336 69.0097 200.181 70.1847 199.972 71.3597C199.713 72.5348 199.402 73.7097 199.09 74.8848C198.727 76.0063 198.312 77.1813 197.844 78.303C197.377 79.3711 196.858 80.4927 196.287 81.561C195.716 82.5757 195.093 83.6439 194.418 84.6053C193.743 85.62 193.017 86.5814 192.29 87.4893C191.511 88.4507 190.681 89.3052 189.851 90.1598C189.332 90.6405 188.864 91.0678 188.345 91.495C187.93 91.8689 187.566 92.1893 187.151 92.5632C186.217 93.3109 185.282 94.0052 184.245 94.6462C183.258 95.2871 182.22 95.928 181.181 96.4621C180.092 96.9962 179.002 97.4769 177.912 97.9575C176.821 98.3848 175.679 98.7587 174.538 99.0792C173.396 99.3996 172.201 99.6667 171.06 99.8802C169.865 100.094 168.672 100.201 167.53 100.308C166.7 100.361 165.868 100.414 165.038 100.414C163.845 100.414 162.65 100.308 161.508 100.201C160.314 100.094 159.121 99.9335 157.979 99.6665C156.784 99.4527 155.643 99.1324 154.501 98.7585H154.449C155.591 98.6518 156.733 98.5448 157.875 98.3312C159.069 98.1176 160.211 97.8506 161.353 97.5301C162.494 97.2096 163.636 96.8358 164.726 96.4085C165.868 95.9812 166.958 95.4471 167.997 94.913C169.087 94.3789 170.073 93.7915 171.111 93.1505C172.097 92.4562 173.084 91.7619 174.018 91.0142C174.952 90.2664 175.835 89.4654 176.665 88.6107C177.548 87.8096 178.327 86.9017 179.105 85.9937C179.884 85.0323 180.611 84.071 181.285 83.1096C181.389 82.9494 181.493 82.7357 181.597 82.5755C182.116 81.721 182.635 80.8665 183.102 80.0118C183.673 78.9436 184.192 77.8755 184.659 76.7539C185.126 75.6323 185.542 74.5107 185.905 73.3357C186.268 72.2141 186.528 71.0391 186.788 69.8641C186.996 68.6357 187.203 67.4607 187.307 66.2857C187.411 65.0573 187.514 63.8288 187.514 62.6539C187.514 61.7993 187.463 60.9448 187.411 60.0902C187.307 58.8618 187.151 57.6868 186.996 56.5118C186.788 55.2834 186.528 54.1084 186.217 52.9334C185.854 51.8118 185.49 50.6368 185.075 49.5152C184.659 48.3936 184.141 47.272 183.622 46.2038C183.05 45.1357 182.48 44.0675 181.857 43.0527C181.181 42.0379 180.507 41.0765 179.781 40.1152C179.002 39.2072 178.223 38.2993 177.393 37.3913C176.977 36.964 176.51 36.4834 176.043 36.0561C173.707 34.1868 171.267 32.4242 168.828 30.8219C168.465 30.6083 168.153 30.4481 167.789 30.2878C166.077 29.1663 164.467 28.5784 162.858 28.0443Z",
    ],
  },
];

export { paths };
