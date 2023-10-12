import { Box, Divider, Stack, Typography, Container } from "@mui/material";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
export const PrintComponent = forwardRef((props, ref) => {
  const { arrestStore } = useSelector((state) => state.arrest);
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const burglaryData = [];

  if (arrestStore.data !== undefined) {
    arrestStore.data.forEach((item) => {
      burglaryData.push({
        date_of_year: item.data_year,
        burglary: item.Burglary,
      });
    });
  }
  console.log(burglaryData);
  return (
    <div style={{ display: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          height: "100%",
          color: "text.primary",
          p: 2,
          mt: 2,
        }}
        ref={ref}
      >
        <Stack>
          <Typography
            variant='h6'
            sx={{
              textAlign: "left",
            }}
          >
            Crime
          </Typography>
          <Divider
            sx={{
              color: "blue",
              bgcolor: "blue",
              height: "2px",
              marginLeft: "60px",
              marginTop: "-15px",
            }}
          />
        </Stack>
        <Stack>
          <Container>
            <Box
              sx={{
                bgcolor: "#f2f4f5",
                height: "450px",
                borderRadius: "35px",
                width: "106%",
                mt: 4,
                ml: -2,
              }}
            >
              <Typography
                sx={{
                  p: 2,
                  backgroundColor: "#E8EEFB",
                  borderRadius: "35px 35px 0 0",
                  color: "blue",
                  fontWeight: "bold",
                }}
                variant='body1'
                component='article'
              >
                Burglary
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  ml: -2,
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    rotate: "270deg",
                    height: "4px",
                    alignSelf: "center",
                    fontWeight: "bold",
                  }}
                >
                  Arrests
                </Typography>

                <Stack
                  sx={{
                    backgroundColor: "white",
                    width: "90%",
                    my: 3,
                    mr: 3,
                    borderRadius: "35px",
                  }}
                >
                  <LineChart
                    width={650}
                    height={350}
                    data={burglaryData}
                    margin={{ top: 20, right: 30, bottom: 5 }}
                  >
                    <CartesianGrid y={1000} stroke='lightgray' />
                    <XAxis dataKey='date_of_year' />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type='linear'
                      dataKey='burglary'
                      stroke='blue'
                      dot={false}
                    />
                  </LineChart>
                </Stack>
              </Stack>
            </Box>
          </Container>
        </Stack>
        <Stack
          sx={{
            mt: 2,
            display: "flex",
          }}
        >
          <Divider
            sx={{
              color: "blue",
              bgcolor: "blue",
              height: "2px",
            }}
          />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography variant='body1' color='blue' fontWeight='bold'>
              Report Generated on {formattedDate}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontWeight: "bold",
              }}
            >
              RealAssitPropertyReport | Page 1 of 25
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
});

export default PrintComponent;
